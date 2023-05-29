import { Router } from "express";
import ClassesController from "../controllers/classes.controller.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { ClassSchema } from "../schemas/classes.schema.js";

const ClassesRouter = Router();

ClassesRouter.get('/', ClassesController.getAllClasses);
ClassesRouter.post('/', validateSchema(ClassSchema), ClassesController.createClass);
ClassesRouter.get('/:id', ClassesController.getClassesByStudentId);

export default ClassesRouter;