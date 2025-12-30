import { DataTypes, InferAttributes, Model, InferCreationAttributes, CreationOptional,  } from "sequelize";
import conecciondb from "../config/db";

class Trabajo extends Model<
  InferAttributes<Trabajo>,
  InferCreationAttributes<Trabajo>
>{
    declare id: CreationOptional<number>
    declare tipo:string
    declare puesto:string
}

Trabajo.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    puesto:{
        type: DataTypes.STRING,
        allowNull:false
    },
    tipo:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:conecciondb,
    modelName:'trabajo'
})

export default Trabajo