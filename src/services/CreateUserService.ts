import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
    name: string;
    email: string;
    password: string;
}

// Classe para criação de usuário.

class CreateUserService {

    public async execute({ name, email, password  }: Request ): Promise<User> {

        const userRepository = getRepository(User);


        const checkUserExists = await userRepository.findOne({
            where: { email },
        });

        if(checkUserExists) {
            throw new AppError('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        // Cria o usuário.
        const user = userRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        // Salva o usuário no banco de dados.
        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
