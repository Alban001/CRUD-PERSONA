import { Request, Response } from "express";
import { Trabajo } from "../models/index";

const createTrabajo =async (req: Request, res: Response): Promise<void> =>{
    try {
        const { tipo, puesto  } = req.body
        if(!tipo || ! puesto){
            res.status(400).json({
                ok:false,
                msg:'Faltan campos obligatorios!'
            })
            return;
        }
        const nuevoTrabajo = await Trabajo.create({tipo, puesto})
        res.status(201).json({
            ok:true,
            msg:'Trabajo creado exitosamente!',
            trabajo: nuevoTrabajo
        })

    } catch (error) {
        if(error instanceof Error){
            console.error('Ha ocurrido un error '+ error.message)
            console.error('Stacktrace '+ error.stack)
            }else{
                console.error('Ha ocurrido un error interno '+ error)
            }
        res.status(500).json({
            ok:false,
            msg:'Error en el servidor'
        })   
    }
}
export default createTrabajo