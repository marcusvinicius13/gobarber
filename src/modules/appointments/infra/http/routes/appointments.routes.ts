import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import AppointmenstController from '../controllers/AppointmentsController';
import ProviderAppointmenstController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmenstController = new AppointmenstController();
const providerAppointmentController = new ProviderAppointmenstController();
appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmenstController.create);
appointmentsRouter.post('/me', providerAppointmentController.index);

export default appointmentsRouter;
