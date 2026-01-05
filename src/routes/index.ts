import { Router } from "express";
import personaRouter from "./persona.route";
import trabajoRouter from "./trabajo.route";
const indexRouter = Router()

indexRouter.use('/personas', personaRouter)
indexRouter.use('/trabajos', trabajoRouter)

export default indexRouter