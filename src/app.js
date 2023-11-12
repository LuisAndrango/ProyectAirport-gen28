import  express from "express"
//traiga todas las funcionalidades de passengers.router y le cambio de nombre con el as
import {router} from './routes/routes.js'

const app = express();

//esto es un meddwere que una función que hace algo y en código 
//se dice que express va a haceptar información en formato json
app.use(express.json())

//Aquí da a entender que /api/v1 eso es como un nombre nomas y como segundo 
//parámetro despues de la coma le mando las funcioanlidades creadas
app.use("/api/v1", router)


export default app;

//Endpoint 5: Eliminar la información de un pasajero