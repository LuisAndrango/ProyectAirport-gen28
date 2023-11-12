import { Sequelize } from "sequelize";
import { envs } from '../enviroments/enviroment.js'

//con esta configuración envito que haga demaciado ruido en la terminal
export const sequelize = new Sequelize(envs.DB_URI,{
    logging: false
})
//autenticar es presentar las credenciales y establecer una conección
//authenticate() es una función ya predeterminada
export async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.****"); 
    } catch (error) {
        throw new Error('Error al autenticar', error)
    }
}

//sincronizar poder tomar los cambios que tengo en mi 
//base de datos y poderlos sincronizar, o establecerlos como 
//tal en mi base de datos y syncUp() es una función ya predeterminada
export async function syncUp() {
    try {
        await sequelize.sync();
        console.log("Connection has been established successfully. <<<>>>");
    } catch (error) {
        throw new Error('Error al autenticar', error)
    }
}

export default sequelize;





