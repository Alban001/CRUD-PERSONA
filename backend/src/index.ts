    import express from 'express'
    const cors = require('cors')
    import coneccion from './config/database'
    import db from './models'
    const app = express()
    // Inicializacion del dotenv para leer del .envfile
    require('dotenv').config()
    const PORT: string = process.env.PORT ?? "3900" // ?? retorna el valor derecho si el izuierdo es null o undefined
    console.log(`tipo de dato es ${typeof(process.env.PORT)}`)
    app.use(cors())

    const testConector = async(): Promise<void> => {
        try {
            await coneccion.authenticate()
            console.log('Conección con la db establecido corretamente!')
        } catch (error: any) {
            console.error('Error al conectar a la base de datos ', error.message)
            process.exit(1)
        }
    }   
    testConector()
    db.coneccion.sync()
    app.listen(PORT, ()=>{
        console.log(`Servidor corriendo en el puerto ${PORT}`)
    })

