import express from "express";
import "express-async-errors";
import { errorHandling } from "./middlewares/error-handling";

const app = express();
app.use(express.json());
app.use(errorHandling);

export { app };
