import express from "express";
import taskController from "../controllers/taskController";

const router = express.Router();

router.post("/", taskController.createTask);

export default router;
