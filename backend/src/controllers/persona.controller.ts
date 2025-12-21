import { Response, Request } from "express";
import Persona from "../models/persona.model";

export const crearPersona =async  (req: Request, res: Response)=>{
    try {
         const { nombre, edad, address } = req.body
         if(!nombre){
            res.status(401).json({
                ok:false,
                msg: 'El nombre es obligatorio !!'
            })
            return;
         }
         const nuevaPersona = await Persona.create({
            nombre,
            edad,
            address
         })

         res.status(201).json({
            ok:true,
            msg:'Persona creada exitosamente!',
            persona:nuevaPersona
         })
        
    } catch (error: any) {
        console.error('Error al crear persona '+ error)
        res.status(500).json({
            ok:false,
            msg:'Error de servidor',
            error:error.message
        })
    }

}
