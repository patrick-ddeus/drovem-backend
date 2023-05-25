import { Router} from "express"
import StudentsRouter from "./student.routes.js";

const IndexRouter = Router()

IndexRouter.use('/students', StudentsRouter)

export default IndexRouter