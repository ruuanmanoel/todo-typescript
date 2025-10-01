import Task from "../models/task";
import { appendFile } from "fs/promises";
import path = require("path");

async function addTask(task: Task) {
  const filePath = path.resolve(__dirname, "../tmp/tasks.txt");
  try {
    await appendFile(filePath, JSON.stringify(task) + "\n", {
      flag: "a",
    });
    console.log("Tarefa adicionada com sucesso!");
    return task;
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", (error as Error).message);
    throw error;
  }
}

export default {
  addTask,
};
