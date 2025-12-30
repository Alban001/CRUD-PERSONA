import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import conecciondb from "../config/db";

class Persona extends Model<
   InferAttributes<Persona>,
   InferCreationAttributes<Persona>
>{
    declare id: CreationOptional<number>
    declare nombre:string
    declare edad:number
}

Persona.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:true
    },
    edad:{
        type:DataTypes.INTEGER
    }
},{
    sequelize:conecciondb,
    modelName:'persona'
}
)

export default Persona