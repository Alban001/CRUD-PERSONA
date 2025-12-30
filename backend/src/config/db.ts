import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const { DB_USER, DB_NAME, DB_HOST,DB_PASSWORD } = process.env

const conecciondb = new Sequelize(DB_NAME,DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:'postgres',
    logging:false
})

export default conecciondb;