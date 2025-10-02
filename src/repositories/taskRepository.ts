import Task from "../models/task";
import { appendFile, readFile, writeFile } from "fs/promises";
import path = require("path");

async function getTask(id: string) {
  const filePath = path.resolve(__dirname, "../tmp/tasks.txt");
  try {
    const data = await readFile(filePath, "utf8");
    const tasks = data
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => JSON.parse(line));
    const task = tasks.find((t: Task) => t.id.toString() === id);
    return task;
  } catch (error) {
    console.error("Erro ao ler tarefa:", (error as Error).message);
    throw error;
  }
}

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

async function deleteTask(id: string) {
  const filePath = path.resolve(__dirname, "../tmp/tasks.txt");
  try {
    const data = await readFile(filePath, "utf8");
    const tasks = data
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => JSON.parse(line));
    const task = tasks.find((t: Task) => t.id.toString() === id);
    const index = tasks.findIndex((t: Task) => t.id.toString() === id);
    tasks.splice(index, 1);
    await writeFile(filePath, tasks.map((t) => JSON.stringify(t)).join("\n"));
    return task;
  } catch (error) {
    console.error("Erro ao ler tarefa:", (error as Error).message);
    throw error;
  }
}

export default {
  getTask,
  addTask,
  deleteTask,
};
