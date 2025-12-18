// Aqui se creara la conexion a la base de datos
import { Sequelize } from 'sequelize'
// Inicializamos el entorno dotenv
require('dotenv').config()

// Instanciamos un objeto Sequelize

const coneccion = new Sequelize(process.env.DB_NAME !, process.env.DB_USER!, process.env.DB_PASSWORD!,{
    dialect:'postgres',
    host: process.env.DB_HOST!,
    logging: true
    })

export default coneccion;