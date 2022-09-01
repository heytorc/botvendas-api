import { Router } from "express";

import FiscalNumberController from '@/controllers/fiscalnumber.controller';
import AddressController from "@/controllers/address.controller";
import ElegibilityController from "@/controllers/elegibility.controller";
import PayController from "@/controllers/pay.controller";

const routes = Router();

routes.get('/fiscalnumber/validate/:fiscalnumber', FiscalNumberController.validate);
routes.get('/address/postalCode/:postalcode', AddressController.getAddressByPostalCode);
routes.get('/elegibility', ElegibilityController.getElegibility);
routes.get('/pay', PayController.pay);
routes.get('/pay/form', PayController.payForm);

export default routes;