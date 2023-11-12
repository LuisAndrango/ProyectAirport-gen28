import z from "zod";
//la siguiente constante con el z.object vamos a validar cada una de las propiedades de ese objeto
export const passengerSchema= z.object({
    //con esto digo que a zod valide que el numero de pasaporte sea string
    //min(8) minimo enviar 8 caracteres y máximo max(10)
    nroPassport: z.string().min(8).max(10),
    name: z.string().min(2).max(99),
    surname: z.string().min(2).max(100),
    birthdate: z.string({
        invalid_type_error: "Birthday must be a correct format",
        //en caso de que no me envia nada
        required_error: "Birthday is required"
    }),
    gender: z.enum(['male', 'female', 'prefer not to say']), 
    email: z.string().email(),
    celphone: z.string().min(5).max(25)
})
//¿como hago para involucrar lo anterior creado en mis validaciones?, a continuación la respuesta

//1) crear una función que se va a encargar de validadar en este caso el pasajero
//nececita recibir la data del pasajero 
export function validatePassenger(data) {
    //safeParce va a hacer todo lo que tiene que ver el tema de la validación si esta bien o si esta mal y asi
    // y le paso la (data)
const result = passengerSchema.safeParse(data)

const { 
    hasError, 
    errorMessage, 
    //asi se renombra una variable para que no este igual
    data: passengerData
    } = extractValidationData(result)

return { 
        hasError,
        errorMessage, 
        passengerData}
}
//2) crear una función a parte que se va a utilizar ne muchas partes
// la idea es que esta función es que me va retornar todos los resultados de result 
// del cual va a venir muchas cosas del que toca separar
export const extractValidationData = (resultValidation)=>{
    //crear una variable 
    let errorMessage;
    let data;
    const hasError = resultValidation.success;

    if(hasError) errorMessage = JSON.parse(resultValidation.error.message);
    if(!hasError) data = resultValidation.data

    return {
        hasError,
        errorMessage,
        data
    }
}