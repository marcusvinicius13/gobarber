import { response, Router } from 'express';
import { startOfHour, parseISO,  } from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';


const  appointmentsRouter = Router();
const appointmentRepository = new AppointmentRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (require, response) => {
  try {
    const { provider, date } = require.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(appointmentRepository);

    const appointment = createAppointment.execute({ provider, date:parsedDate });
    return response.json(appointment);

  } catch (error) {
    return response.status(400).json({message: error.message});
  }

})

export default appointmentsRouter;
