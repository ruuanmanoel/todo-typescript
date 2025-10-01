import { Request, Response, NextFunction } from "express";
import Task from "../models/task";
import taskRepository from "../repositories/taskRepository";

async function createTask(req: Request, res: Response, next: NextFunction) {
  const { titulo, descricao, status } = req.body as Task;
  const task = new Task(titulo, descricao, status);
  console.log(task);
  const result = await taskRepository.addTask(task);
  res.status(201).json(result);
}

export default {
  createTask,
};
