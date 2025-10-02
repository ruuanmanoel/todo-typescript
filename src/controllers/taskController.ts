import { Request, Response, NextFunction } from "express";
import Task from "../models/task";
import taskRepository from "../repositories/taskRepository";

async function getTask(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const task = await taskRepository.getTask(id);
  res.status(200).json(task);
}

async function createTask(req: Request, res: Response, next: NextFunction) {
  const { titulo, descricao, status } = req.body as Task;
  const task = new Task(titulo, descricao, status);
  const result = await taskRepository.addTask(task);
  res.status(201).json(result);
}

async function deleteTask(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const result = await taskRepository.deleteTask(id);
  res.status(200).json(result);
}

export default {
  createTask,
  getTask,
  deleteTask,
};
