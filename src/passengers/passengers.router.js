//--R--U--T--A--S--
//primero desestructuro la funcion de rutas de express
import  { Router } from 'express'

//despues de haber creado otro módulo con las funcionalidas, las importo uno por uno
import {
    findAllPassenger,
    createOnePassenger,
    findOnePassenger,
    updatePassenger,
    deleteOnePassenger
} from './passengers.controller.js'

//segundo le paso los poderes a la constante router y la exporto de una vez
export const router = Router();

//Este cambio usa una funcion para rutas llamado
//route y como comparten el mismo endpoint "/passengers"
router.route("/")
.get(findAllPassenger)
.post(createOnePassenger)

//Se le cambio a los el /passengers:id a /:id nomas porque esa dirección se la puso en 
// routes>routes.js 
router.route("/:id")
.get(findOnePassenger)
.patch(updatePassenger)
.delete(deleteOnePassenger)

