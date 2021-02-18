import { startOfHour, isBefore, getHours } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appontment from '../infra/typeorm/entities/Appointment';
import IAppointmentRepository from '../repositories/IAppointmentsRepository';

interface IRequestDTO {
    date: Date;
    user_id: string;
    provider_id: string;
}

@injectable()
class CreateAppointmentService {
    constructor(
        @inject('AppointmentsRepository')
        private appointmentsRepository: IAppointmentRepository,
    ) {}

    public async execute({
        date,
        user_id,
        provider_id,
    }: IRequestDTO): Promise<Appontment> {
        const appointmentDate = startOfHour(date);

        if (isBefore(appointmentDate, Date.now())) {
            throw new AppError(
                "You can't create an appointment on a past date.",
            );
        }

        if (user_id === provider_id) {
            throw new AppError(
                "You can't create an appointment whith yourself",
            );
        }

        if (getHours(appointmentDate) < 8 || getHours(appointmentDate) > 17) {
            throw new AppError(
                'You can only create appointments between 8am and 5pm',
            );
        }

        const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            throw new AppError('This appointment is already booked !', 401);
        }

        const appointment = await this.appointmentsRepository.create({
            user_id,
            provider_id,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
