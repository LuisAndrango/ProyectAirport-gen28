//1) importar {DataType} from "sequelize";
import { DataTypes } from "sequelize";
//2) importar la constante que tiene muchos valores y poderes
import sequelize from "../config/database/database.js";

//para identificar un modelo preferivle que tenga 
//la primera mayuscula
//el atributo de la entidad id se llama asi pero si 
//quiero que en mi tabla se 
const Passenger = sequelize.define('passenger', {
    id: {
        primaryKey:true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        //llame de otra manera le configuro así 
        //field: 'passenger_id'
        field: 'passenger_id'
    },
    nroPassport :{
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
        field: 'nro_passport'
    },
    name:{
        //como nombre es letra se usa STRING que lo 
        //traduce a varchar
        type: DataTypes.STRING(100),
        allowNull: false
    },
    surname:{
        //como nombre es letra se usa STRING que lo 
        //traduce a varchar
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        //como es de tipo ENUM osea con varias obciones 
        //se le pone asi
        type: DataTypes.ENUM('male', 'female', 'prefer not to say'),
        allowNull: false
    },
    email: {
        unique: true,
        type: DataTypes.STRING(150), 
        allowNull: false,
        unique: true
    },
    celphone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    createBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'create_by'
    },
    photo: {
        //aqui pongo de tiupo texto porque voy a poner el enlace de la foto
        type: DataTypes.TEXT,
        allowNull: false,
        //para poner una foto de defecto es
        defaultValue: "sin foto"
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        //se le asigan aqui un valor por defecto
        defaultValue: true
    }
    //sequelize crea por defecto created_at
});

export default Passenger;