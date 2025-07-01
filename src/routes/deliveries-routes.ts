import { Router } from "express";
import { DeliveryController } from "@/controllers/deliveries-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-userAuthorization";

const deliveryRoutes = Router();
const deliveryController = new DeliveryController();

deliveryRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveryRoutes.post("/", deliveryController.create);

export { deliveryRoutes };
