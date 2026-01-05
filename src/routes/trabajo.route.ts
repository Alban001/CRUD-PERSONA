import { Router } from "express";
import createTrabajo from "../controllers/tabajo.controller";

const trabajoRouter = Router()

trabajoRouter.post('/', createTrabajo)

export default trabajoRouter