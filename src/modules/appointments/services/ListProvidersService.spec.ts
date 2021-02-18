// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProvidersService: ListProvidersService;

describe('UpdateProfile', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();

        listProvidersService = new ListProvidersService(fakeUsersRepository);
    });

    it('should be able to list the providers', async () => {
        const loggedUser = await fakeUsersRepository.create({
            name: 'Vinicius',
            email: 'vinicius@hotmail.com',
            password: '123456',
        });

        const userOne = await fakeUsersRepository.create({
            name: 'Marcus Vinícius',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        const userTwo = await fakeUsersRepository.create({
            name: 'Jhon Doe',
            email: 'jhondoe@hotmail.com',
            password: '123456',
        });

        const providers = await listProvidersService.execute({
            user_id: loggedUser.id,
        });

        expect(providers).toEqual([userOne, userTwo]);
    });
});
