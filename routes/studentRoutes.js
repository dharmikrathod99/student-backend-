import express from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../Controllers/studentController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createStudent);
router.get("/all", protect, getStudents);
router.put("/update/:id", protect, updateStudent);
router.delete("/delete/:id", protect, deleteStudent);

export default router;
