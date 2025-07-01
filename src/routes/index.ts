import { Router } from "express";
import { userRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-route";
import { deliveryRoutes } from "./deliveries-routes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveryRoutes);
export { routes };
