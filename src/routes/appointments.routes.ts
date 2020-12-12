import { Router } from 'express';
import { getCustomRepository } from  'typeorm';
import { parseISO } from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';


const  appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointments = await appointmentRepository.find();

    return response.json(appointments);
});

appointmentsRouter.post('/', async(require, response) => {

    const { provider_id, date } = require.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({ provider_id, date:parsedDate });
    return response.json(appointment);

})

export default appointmentsRouter;
