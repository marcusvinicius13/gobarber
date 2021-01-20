import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmenstController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmenstController = new AppointmenstController();

appointmentsRouter.use(ensureAuthenticated);

/*
    appointmentsRouter.get('/', async (request, response) => {
        const appointments = await appointmentsRepository.find();

        return response.json(appointments);
    });
*/

appointmentsRouter.post('/', appointmenstController.create);

export default appointmentsRouter;
