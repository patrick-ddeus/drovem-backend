import { Router } from "express";
import ClassesController from "../controllers/classes.controller.js";

const ClassesRouter = Router();

ClassesRouter.get('/', ClassesController.getAllClasses);

export default ClassesRouter;