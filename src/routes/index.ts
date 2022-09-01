import { Router } from "express";

import FiscalNumberController from '@/controllers/fiscalnumber.controller';
import AddressController from "@/controllers/address.controller";
import ElegibilityController from "@/controllers/elegibility.controller";

const routes = Router();

routes.get('/fiscalnumber/validate/:fiscalnumber', FiscalNumberController.validate);
routes.get('/address/postalCode/:postalcode', AddressController.getAddressByPostalCode);
routes.get('/elegibility', ElegibilityController.getElegibility);

export default routes;