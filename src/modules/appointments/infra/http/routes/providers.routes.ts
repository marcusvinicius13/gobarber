import { Router } from 'express';

import ensureAutheticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersControlller';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const providerRouter = Router();
const providerController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providerRouter.use(ensureAutheticated);
providerRouter.get('/', providerController.index);
providerRouter.get(
    '/:provider_id/month-availability',
    providerMonthAvailabilityController.index,
);
providerRouter.get(
    '/:provider_id/day-availability',
    providerDayAvailabilityController.index,
);

export default providerRouter;
