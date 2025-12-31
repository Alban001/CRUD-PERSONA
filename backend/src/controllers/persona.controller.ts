import { Request, Response } from "express";
import Persona from "../models/persona.model";
import { json } from "sequelize";

const createPersona = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nombre, edad } = req.body
        // Comprobacion de campos 
        if (!nombre || !edad) {
            res.status(400).json({
                ok: false,
                msg: 'Se require el campo nombre y edad'
            })
            return;
        }
        const nuevaPersona = await Persona.create({ nombre, edad })

        res.status(201).json({
            ok: true,
            msg: 'Persona creada exitosamente!',
            persona: nuevaPersona
        })

    } catch (error) {
        if (error instanceof Error) {
            console.error('Error ocurrido ' + error.message)
        } else {
            console.error('Error interno del servidor ' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'Error interno del servidor'
        })
    }
}

const readPersona = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        if(id){
        const persona = await Persona.findByPk(id)
            if (!persona) {
            res.status(404).json({
                ok: false,
                msg: `Persona con id ${id} no encontrada`
            })
            return;
        }
        res.status(200).json({
            ok: true,
            persona
        })

        }
        // Si no se envio el id, retornamos todos los registros
        const personas = await Persona.findAll({ order: [['createdAt', 'DESC']] })

        res.status(200).json({
            ok: true,
            total: personas.length,
            personas
        })

    } catch (error) {
        if (error instanceof Error) {
            console.error('Ha ocurrido un error ' + error.message)
        } else {
            console.error('Error interno del servidor' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'ERRO INTERNO DEL SERVIDOR'
        })
    }
}

const updatePersona = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { nombre, edad } = req.body
        const persona = await Persona.findByPk(id)

        if (!persona) {
            res.status(404).json({
                ok: false,
                msg: 'Persona no encontrada'
            })
            return;
        }
        /* CUIDADO CON ESTA CONDICION LOGICA AQUI LA PREMISA ES si nombre es undefined y edad es undefined
        entonces enivame al menos un campo, es decir puedo enivar UNO o todos los campos 
        sin embargo si uso OR si nombre es undefined o edad es undefined entonces no permito, todos deben ser typed*/
        if (nombre === undefined && edad === undefined) {
            res.status(401).json({
                ok: false,
                msg: 'Debes enviar al menos un campo para actualizar'
            })
            return;
        }
        if (nombre !== undefined) persona.nombre = nombre
        if (edad !== undefined) persona.edad = edad
        await persona.save()
        res.status(200).json({
            ok: true,
            msg: 'Persona actualizada',
            persona: {
                nombre: persona.nombre,
                edad: nombre.edad
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ha ocurrido un error ' + error.message)
        } else {
            console.error('Error interno del servidor' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'ERRO INTERNO DEL SERVIDOR'
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
                msg: `Persona con ${id} no encontrado!`
            })
            return;
        }

        await persona.destroy()
        res.status(200).json({
            ok: false,
            msg: 'Persona eliminadad correctamente!',
            persona: {
                nombre: persona.nombre,
                edad: persona.edad
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error('Ha ocurrido un error ' + error.message)
        } else {
            console.error('Error interno del servidor' + error)
        }
        res.status(500).json({
            ok: false,
            msg: 'ERRO INTERNO DEL SERVIDOR'
        })
    }
}

const personaController = {
    createPersona,
    readPersona,
    updatePersona,
    deletePersona   

}
export default personaController