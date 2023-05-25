import { Router } from "express";
import StudentsController from "../controllers/students.controller.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import StudentSchema from "../schemas/students.schema.js";

const StudentsRouter = Router();

StudentsRouter.post('/register', validateSchema(StudentSchema), StudentsController.insertOneUser);

export default StudentsRouter;