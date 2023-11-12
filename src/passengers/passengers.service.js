//este archivo va a mandar las ordenes que se reaalicen lo que queremos
import Passenger from "./passengers.model.js";

export class PassengerService {

    async finOnePassenger(id){
        // where me permite establecer condicones de endonde voy a buscar
        return await Passenger.findOne({
            where: {
                id,
                status: true
            }
        })
    }

    async finAllPassengers(){   
        //findAll Es una función  especifica para esto
        return await Passenger.findAll({
            //el where hace una busqueda que hace filtrar los datos
            where: {
                status: true
            }
        }) 
    }
//  nombreDeLaFuncion(información que recibe "data"){ retorno y como puse async tengo que
// poner await mas nombre de la entidad creada y que se importo mas el metodo-funcion create 
// mas lo que recibe del pasajero (data que recibe "data")
// }
    async createPassenger(data){
        return await Passenger.create(data)
    }

    //METODO PARA ACTUALIZAR UN PASAJERO
    //aquí se crea el nombre de la función se configura que va a recibir 2 parámetros
    //(passenger, data) entonces con esas dos informaciones recibidas se le pasa la funcion
    //update con las información que se usara para actualizar
    async updatePassenger(passenger, data){
        return await passenger.update(data)
    }

    //1) paso el pasasjero buscado
    async deletePassenger(passenger){
        //retorno el cambio con el estado(atributo) de pasenger a false
        return await passenger.update({ status: false})
    }


}