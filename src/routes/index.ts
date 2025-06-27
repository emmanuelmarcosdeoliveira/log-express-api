import { Router } from "express";
import { userRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-route";

const routes = Router();
routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);

export { routes };
