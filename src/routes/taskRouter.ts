import express from "express";
import taskController from "../controllers/taskController";

const router = express.Router();

router.post("/", taskController.createTask);
router.get("/:id", taskController.getTask);
router.delete("/:id", taskController.deleteTask);

export default router;
