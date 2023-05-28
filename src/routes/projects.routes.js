import { Router } from "express";
import ProjectsController from "../controllers/projects.controller.js";
import { validateSchema } from "../middlewares/schema.middleware.js";
import { SendProjectSchema, ProjectSchema , GradesSchema} from "../schemas/projects.schema.js";

const ProjectsRouter = Router();

ProjectsRouter.post('/send', validateSchema(SendProjectSchema), ProjectsController.sendProject);
ProjectsRouter.post('/', validateSchema(ProjectSchema), ProjectsController.createProject);
ProjectsRouter.get('/list', ProjectsController.listProjects);
ProjectsRouter.get('/list/done', ProjectsController.listDoneProjects);
ProjectsRouter.put('/grades', validateSchema(GradesSchema), ProjectsController.updateGrade);

export default ProjectsRouter;