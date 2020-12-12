import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'

import routes from './routes/index.routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database'

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: AppError, reuqest: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    return response.status(500).json({
        status: 'errror',
        message: 'Internal server error',
    });
});


app.listen(3333, () => {
  console.log('Server Started on port 3333');
});
