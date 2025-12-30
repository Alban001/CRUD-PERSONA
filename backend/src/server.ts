import express from "express";
import db from "./config/index";
import dotenv from 'dotenv'
import indexRouter from "./routes";
dotenv.config()

const PORT = process.env.PORT || 3800

const app = express()
app.use(express.json())

app.use('/api', indexRouter)

const iniciarServidor =async ():Promise<void>=>{
    try {
        console.log('Iniciando servidor..')
        await db.conecciondb.authenticate()
        console.log('Conexión exitosa con la base de datos '+ process.env.DB_NAME)
        await db.conecciondb.sync({alter:true})
        console.log('Tablas sincronizadas exitosamente!')
        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo en : http://${process.env.DB_HOST}:${process.env.PORT}`)
        })
    } catch (error: any) {
        if(error instanceof Error){
            console.error('Ha ocurrido un error '+ error.message)
            console.error('Stack '+ error.stack)
        }else{
            console.error('Error desconocido '+ error)
        }
    }
}

iniciarServidor()