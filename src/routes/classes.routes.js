import { Router } from "express";
import ClassesController from "../controllers/classes.controller.js";

const ClassesRouter = Router();

ClassesRouter.get('/', ClassesController.getAllClasses);
ClassesRouter.post('/', ClassesController.createClass);
ClassesRouter.get('/:id', ClassesController.getClassesByStudentId);

export default ClassesRouter;