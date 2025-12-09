import express from 'express'
const cors = require('cors')
const app = express()
// Inicializacion del dotenv para leer del .envfile
require('dotenv').config()
const PORT: string = process.env.PORT ?? "3900" // ?? retorna el valor derecho si el izuierdo es null o undefined
console.log(`tipo de dato es ${typeof(process.env.PORT)}`)
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

