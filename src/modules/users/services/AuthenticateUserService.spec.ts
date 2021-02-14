import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUserService: CreateUserService;
let autheticateUser: AuthenticateUserService;

// Cria uma categoria de testes
describe('AuthenticateUser', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();

        createUserService = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );

        autheticateUser = new AuthenticateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
    });

    it('should be able to authenticate', async () => {
        const user = await createUserService.execute({
            name: 'Marcus Vinícius',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        const response = await autheticateUser.execute({
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        expect(response).toHaveProperty('token');
        expect(response.user).toEqual(user);
    });

    it('should be able to authenticate with non existing user', async () => {
        await expect(
            autheticateUser.execute({
                email: 'marcusvinicius1_3@hotmail.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to authenticate eith wrong password', async () => {
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
