//1) instale la libreria que sirve para las variables de entorno
//2) llamo esa función de la siguiente manera
import "dotenv/config"

import env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_URI: env.get('DB_URI').required().asString()
}
