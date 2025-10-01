import { Status } from "./status";

export default class Task {
  id: number;
  titulo: string;
  descricao: string;
  status: Status;
  created_at: Date;
  updated_at?: Date;

  private static nextId = 1;

  constructor(titulo: string, descricao: string, status: Status) {
    this.id = Task.nextId++;
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
    this.created_at = new Date();
  }
}
