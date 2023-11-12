import { validatePassenger } from "./passengers.schema.js";
import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService();

export const findAllPassenger = async (req, res) => {
  try {
    const passengers = await passengerService.finAllPassengers();
    return res.status(201).json(passengers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createOnePassenger = async(req, res) => {
  try {
    //ela siguiente codigo viene de passengers.schema.js
    const {hasError, errorMessage, passengerData} = validatePassenger(req.body)
    
    return res.json({
      results: passengerData,
      errorMessage
    })

    const passenger = await passengerService.createPassenger(req.body);
    //esto significa que voy a enviar en formato json con el estado 201
    return res.status(201).json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const findOnePassenger = async (req, res) => {
  try {
    //id esta destructurado pues en passenger.router puse "/passengers/:id
    //y el id es un parametro que lo estoy solicitando con req.params
    const { id } = req.params;
    const passenger = await passengerService.finOnePassenger(id);

    //A continuanción se puede ayudar a enviar un correcto estado de no encontrado
    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with id ${id} not found`,
      });
    }
    return res.json(passenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updatePassenger = async (req, res) => {
  try {
    const { id } = req.params;

    //1)a que pasajero voy a actualizar
    const passenger = await passengerService.finOnePassenger(id);
    //2) pongo la condición si no la encuentro por si las moscas
    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with ${id} not foun`,
      });
    }
    //3) Creo la constante que tiene las funcionalidades creadas passenger.service
    // y le digo que le paso al pasaguero buscado"passenger"" y la información que
    //viene por la req.body que el cliente a mandado "req.body"
    const updatePassenger = await passengerService.updatePassenger(
      passenger,
      req.body
    );
    //retorno esto y ya está
    return res.json(updatePassenger);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteOnePassenger = async (req, res) => {
  try {
    //desectrestructuración de objetos
    const { id } = req.params;
    const passenger = await passengerService.finOnePassenger(id);
    //Si el pasajero es false entonces retornara el mensaje que esta a continuación
    if (!passenger) {
      return res.status(404).json({
        status: "error",
        message: `Passenger with ${id} not found`,
      });
    }
    await passengerService.deletePassenger(passenger)
    return res.status(204).json(null);
  } catch (error) {
    return res.status(500).json(error);
  }
};
