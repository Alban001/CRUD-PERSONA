import { crearPersona } from "../controllers/persona.controller";
import { Router } from "express";

const personaRouter = Router()

personaRouter.post('/crearpersona', crearPersona);

export default personaRouter