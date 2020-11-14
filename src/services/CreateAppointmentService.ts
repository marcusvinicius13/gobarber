import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appontment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentRepository';

interface RequestDTO {
  provider: string,
  date: Date
}

class CreateAppointmentService {

  public async execute({ provider, date }: RequestDTO): Promise<Appontment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentRepository.findByDate(appointmentDate);

    if(findAppointmentInSameDate) {
      throw Error('This appointment is already booked !');
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
