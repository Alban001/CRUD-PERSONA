import express from 'express'
const cors = require('cors')
const PORT: string = '3900'
const app = express()
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

