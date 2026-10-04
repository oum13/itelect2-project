// routes/books.js -- new in Session 11. Wiring only: which URL runs
// which controller function, and which guards run first.

import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";
import {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();
// server.js mounts this router at /api/tasks, so "/" is /api/tasks

router.get("/", listTasks);
router.get("/:id", getTask);
router.post("/", verifyToken, createTask);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, requireRole("admin"), deleteTask);

export default router;