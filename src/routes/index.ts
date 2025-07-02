import { Router } from "express";
import { userRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-route";
import { deliveryRoutes } from "./deliveries-routes";
import { deliveryLogsRoutes } from "./delivery-logs-rotes";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/deliveries", deliveryRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);
export { routes };
