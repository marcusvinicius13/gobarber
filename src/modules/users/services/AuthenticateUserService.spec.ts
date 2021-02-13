import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

// Cria uma categoria de testes
describe('AuthenticateUser', () => {
    it('should be able to authenticate', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUserService = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        const autheticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        const user = await createUserService.execute({
            name: 'Marcus Vinícius',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        const response = await autheticateUser.execute({
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        await expect(response).toHaveProperty('token');
        await expect(response.user).toEqual(user);
    });

    it('should be able to authenticate with non existing user', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const autheticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        await expect(
            autheticateUser.execute({
                email: 'marcusvinicius1_3@hotmail.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to authenticate eith wrong password', async () => {
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUserService = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        const autheticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        await createUserService.execute({
            name: 'Marcus Vinícius',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        await expect(
            autheticateUser.execute({
                email: 'marcusvinicius1_3@hotmail.com',
                password: 'wrong-password',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
