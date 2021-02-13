import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepositiry';
import CreateAppointmentService from './CreateAppointmentService';

// Cria uma categoria de testes
describe('CreateAppointment', () => {
    it('should be able to create a new appointment', async () => {
        const fakeAppointmentsRepositiry = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepositiry,
        );

        const appointment = await createAppointment.execute({
            date: new Date(),
            provider_id: '123123',
        });

        await expect(appointment).toHaveProperty('id');
        await expect(appointment.provider_id).toBe('123123');
    });

    it('should not be able to create two appointment on the same time', async () => {
        const fakeAppointmentsRepositiry = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppointmentService(
            fakeAppointmentsRepositiry,
        );

        const appointmentDate = new Date(2021, 1, 10, 11);

        await createAppointment.execute({
            date: appointmentDate,
            provider_id: '123123',
        });

        await expect(
            createAppointment.execute({
                date: appointmentDate,
                provider_id: '123123',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
