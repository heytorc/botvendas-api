import { Router } from "express";

import FiscalNumberController from '@/controllers/fiscalnumber.controller';
import AddressController from "@/controllers/address.controller";

const routes = Router();

routes.get('/fiscalnumber/validate/:fiscalnumber', FiscalNumberController.validate);
routes.get('/address/postalCode/:postalcode', AddressController.getAddressByPostalCode);

export default routes;