import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import coneccion from "../config/database";


class Persona extends Model<
  InferAttributes<Persona>,
  InferCreationAttributes<Persona>
>{
    declare id: CreationOptional<number>
    declare nombre: string
    declare edad:number
    declare address: string
}

Persona.init(
    {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
       nombre: {
        type: DataTypes.STRING,
        allowNull: true
       },
       edad: {
         type: DataTypes.INTEGER,
         allowNull: false
       },
       address:{
        type: DataTypes.STRING,
        allowNull: false
       },
    },
       {
        sequelize: coneccion,
        tableName: 'persona',
        modelName: 'Persona',
        timestamps:true
       }
)

export default Persona;