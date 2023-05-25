import { Router } from "express";
import ProjectsController from "../controllers/projects.controller.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import ProjectSchema from "../schemas/projects.schema.js";

const ProjectsRouter = Router();

ProjectsRouter.post('/send', validateSchema(ProjectSchema), ProjectsController.sendProject);
ProjectsRouter.get('/list', ProjectsController.listProjects);


export default ProjectsRouter;