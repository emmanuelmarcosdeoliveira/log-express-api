import { Router } from "express";
import { DeliveryController } from "@/controllers/deliveries-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-userAuthorization";
import { DeliveriesStatusController } from "@/controllers/deliveries-status-controller";

const deliveryRoutes = Router();
const deliveryController = new DeliveryController();
const deliveriesStatusController = new DeliveriesStatusController();

deliveryRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveryRoutes.post("/", deliveryController.create);
deliveryRoutes.get("/", deliveryController.index);
deliveryRoutes.patch("/:id/status", deliveriesStatusController.update);

export { deliveryRoutes };
