import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../entities/Appointment';

class AppointmentRepository implements IAppointmentsRepository {
    private ormRepositorry: Repository<Appointment>;

    constructor() {
        this.ormRepositorry = getRepository(Appointment);
    }

    public async findByDate(date: Date): Promise<Appointment | undefined> {
        const findAppointment = await this.ormRepositorry.findOne({
            where: { date },
        });

        return findAppointment;
    }

    public async create({
        provider_id,
        date,
    }: ICreateAppointmentDTO): Promise<Appointment> {
        const appointment = this.ormRepositorry.create({ provider_id, date });
        await this.ormRepositorry.save(appointment);

        return appointment;
    }
}

export default AppointmentRepository;
