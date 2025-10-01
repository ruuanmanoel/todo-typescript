import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
