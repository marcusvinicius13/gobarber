import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

// Cria uma categoria de testes
describe('CreateUser', () => {
    it('should be able to create a new user', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createAppointment = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider
        );

        const user = await createAppointment.execute({
            name: 'Marcus Vinícius',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456'
        });

        expect(user).toHaveProperty('id');
    });

    it('should be able to create a new user with same email from another', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider
        );

        await createUser.execute({
            name: 'Marcus Vinícius',
            email: 'marcus@hotmail.com',
            password: '123456'
        });

        expect(
            createUser.execute({
                name: 'Marcus Vinícius',
                email: 'marcus@hotmail.com',
                password: '123456'
            })
        ).rejects.toBeInstanceOf(AppError);
    });



});
