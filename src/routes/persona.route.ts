import { Router } from 'express'
import personaController from '../controllers/persona.controller'


const personaRouter = Router()

personaRouter.post('/', personaController.createPersona)
personaRouter.get('/',personaController.readPersona)
personaRouter.get('/:id',personaController.readPersona)
personaRouter.put('/:id', personaController.updatePersona)
personaRouter.delete('/:id', personaController.deletePersona)

export default personaRouter