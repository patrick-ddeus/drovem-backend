import { Router} from "express"
import ClassesRouter from "./classes.routes.js";
import ProjectsRouter from "./projects.routes.js";
import StudentsRouter from "./students.routes.js";

const IndexRouter = Router()

IndexRouter.use('/students', StudentsRouter)
IndexRouter.use('/projects', ProjectsRouter)
IndexRouter.use('/classes', ClassesRouter)

export default IndexRouter