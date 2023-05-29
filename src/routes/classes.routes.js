import { Router } from "express";
import ClassesController from "../controllers/classes.controller.js";

const ClassesRouter = Router();

ClassesRouter.get('/', ClassesController.getAllClasses);
ClassesRouter.get('/:id', ClassesController.getClassesByStudentId);

export default ClassesRouter;