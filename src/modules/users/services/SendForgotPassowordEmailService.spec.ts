import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailService from './SendForgotPassowordEmailService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let fakeMailProvider: FakeMailProvider;
let sendForgotPassowordEmail: SendForgotPasswordEmailService;

// Cria uma categoria de testes
describe('SendForgotPasswordEmail', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeMailProvider = new FakeMailProvider();
        fakeUserTokensRepository = new FakeUserTokensRepository();

        sendForgotPassowordEmail = new SendForgotPasswordEmailService(
            fakeUsersRepository,
            fakeMailProvider,
            fakeUserTokensRepository,
        );
    });

    it('should be able to recover the password using the email', async () => {
        const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

        await fakeUsersRepository.create({
            name: 'MARCUS VINICIUS',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        await sendForgotPassowordEmail.execute({
            email: 'marcusvinicius1_3@hotmail.com',
        });

        expect(sendMail).toHaveBeenCalled();
    });

    it('should not be able to recover a non-existing user password', async () => {
        await expect(
            sendForgotPassowordEmail.execute({
                email: 'marcusvinicius1_3@hotmail.com',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should generate a forgot password token', async () => {
        const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

        const user = await fakeUsersRepository.create({
            name: 'MARCUS VINICIUS',
            email: 'marcusvinicius1_3@hotmail.com',
            password: '123456',
        });

        await sendForgotPassowordEmail.execute({
            email: 'marcusvinicius1_3@hotmail.com',
        });

        expect(generateToken).toHaveBeenCalledWith(user.id);
    });
});

//  RED
//  GREEN
//  REFACTOR
