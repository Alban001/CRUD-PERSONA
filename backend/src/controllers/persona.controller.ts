import { Request, Response } from "express"
import Persona from "../models/persona.model";


// CREAR

const createPeronsa = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nombre, edad } = req.body
        if (!nombre) {
            res.status(400).json({
                ok: false,
                msg: 'Campo "edad", es requerido'
            })
            return;
        }
        const nuevaPersona = await Persona.create({
            nombre,
            edad
        })
        res.status(201).json({
            ok: true,
            msg: 'Perosna creada exitosamente!',
            persona: nuevaPersona
        })

    } catch (error) {
        if (error instanceof Error) {
            console.error('Ha ocurrido un error ' + error.message)
            console.error('Stacktrace ' + error.stack)
        } else {
            console.error('Error desconocido ' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'Erorr interno '
        })
    }
}

// LERR!
const readPersonas = async (req: Request, res: Response): Promise<void> => {
    try {
        // Extraigo id de. params
        const { id } = req.params
        // si existe, entonces lo alojo en una constante
        if (id) {
            const persona = await Persona.findByPk(id)
            // Como una condicional anidada, si no existe retorn un status 404
            if (!persona) {
                res.status(404).json({
                    ok: false,
                    msg: 'Persona no encontrada!'
                })
                // mato el proceso
                return;
            }
            // entonces si finalmente existe envio un retorno res 200
            res.status(200).json({
                ok: true,
                persona
            })
            return;

        }
        // Si no envia el parametro entonces retornamos todos los registros de las personas
        const personas = await Persona.findAll({
            order: [['createdAt', 'DESC']]
        })
        // Y retornamos un res 200 con todos los registros
        res.status(200).json({
            ok: true,
            total: personas.length,
            personas
        })
    } catch (error) {
        /* Si es es instancia de error, entonces retornamos todas keys de Error mediante console.error
        luego retornamos un res 500  */
        if (error instanceof Error) {
            console.error('Ha ocurrido un error ' + error.message)
            console.error('Stacktrace ' + error.stack)
        } else {
            console.error('Ha ocurrido un error desconocido ' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor!'
        })
    }
}

// Actualizar persona 

const updatePersona = async (req: Request, res: Response): Promise<void> => {
    try {
        // Extraer id de la persona 
        const { id } = req.params
        // Extraer campos 
        const { nombre, edad } = req.body
        // Validacion 1 de existencia
        const persona = await Persona.findByPk(id)

        if (!persona) {
            res.status(404).json({
                ok: false,
                msg: `La persona con id ${id} no se encuentra! `
            })
            return;
        }
        // Validacion 2 campos vacios

        if (nombre === undefined && edad === undefined) {
            res.status(400).json({
                ok: false,
                msg: 'Se debe enviar al menos un campo para actualizar'
            })
            return;
        }
        // Actualizar los campos enviado 
        if (nombre !== undefined) persona.nombre = nombre
        if (edad !== undefined) persona.edad = edad
        await persona.save()
        res.status(200).json({
            ok:true,
            msg:'Usuario actualizado correctamente!',
            persona: {
                id:persona.id,
                nombre:persona.nombre,
                edad:persona.edad
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ha ocurrido un error' + error.message)
            console.error('Stacktrace ' + error.stack)
        } else {
            console.error('Error desconocido ' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        })
    }
}

const deletePersona = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const persona = await Persona.findByPk(id)
        if (!persona) {
            res.status(404).json({
                ok: false,
                msg: `No se ha encontrado la persona con el id ${id}`
            })
            return;
        }
        await persona.destroy()
        res.status(200).json({
            ok: true,
            msg: 'Persona eliminada correctamente',
            persona: {
                id: persona.id,
                nombre: persona.nombre,
                edad: persona.edad
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ha ocurrido un error ' + error.message)  

        } else {
            console.error('Error interno ' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'error interno'
        })
    }
}

const personaController = {
    readPersonas,
    createPeronsa,
    updatePersona,
    deletePersona,
}
export default personaController