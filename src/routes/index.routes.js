import { Router} from "express"
import ProjectsRouter from "./projects.routes.js";
import StudentsRouter from "./student.routes.js";

const IndexRouter = Router()

IndexRouter.use('/students', StudentsRouter)
IndexRouter.use('/projects', ProjectsRouter)

export default IndexRouter