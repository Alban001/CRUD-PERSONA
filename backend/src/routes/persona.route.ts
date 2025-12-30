import { Router } from 'express'
import personaController from '../controllers/persona.controller'


const personaRouter = Router()

personaRouter.post('/', personaController.createPeronsa)
personaRouter.get('/',personaController.readPersonas)
personaRouter.get('/:id',personaController.readPersonas)
personaRouter.put('/:id', personaController.updatePersona)
personaRouter.delete('/:id', personaController.deletePersona)

export default personaRouter