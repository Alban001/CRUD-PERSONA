    import express from 'express'
    const cors = require('cors')
    import coneccion from './config/database'
    import db from './models'
import { types } from 'node:util'
    // INICIALIZACION DEL FRAMEWORK EXPRESS
    const app = express()
    // INICIALIZACION DEL DOTENV, PARA LEER EL ARCHIVO .ENV
    require('dotenv').config()
    // ASIGNACION DE PUERTO
    const PORT: string = process.env.PORT ?? "3900" // ?? retorna el valor derecho si el izuierdo es null o undefined
    // MIDDLEWARE CORS, ESTO ES CONFIGURABLE PARA RESTRICCION DE PETICIONES HTTP
    app.use(cors())
   // CREAMOS UNA FUNCCION CONECTOR QUE COMBINA SYNC, Y AUTHENTICATE
    app.use(express.json())

   const conector = async (): Promise<void> =>{
    try {
        
        await coneccion.authenticate()
        console.log('Conecccion con la base de datos exitoso!')
        await db.coneccion.sync()
        console.log('Tablas sincronizadas correctamente')
        app.listen(PORT,() =>{
            console.log(`Servidor express corriendo en el puerto ${PORT}`)
        })
    } catch (error:any) {
         console.error(`Ha ocurrido un error inesperado ${error}`)
    }
   }
   conector()