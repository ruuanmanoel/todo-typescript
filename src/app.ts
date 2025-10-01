import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import taskRouter from "./routes/taskRouter";

const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRouter);

export default app;
