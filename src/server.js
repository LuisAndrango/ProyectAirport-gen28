import { envs } from './config/enviroments/enviroment.js';
import app  from './app.js'
import { authenticate, syncUp } from './config/database/database.js';

async function main(){
    try {
        await authenticate(),
        await syncUp()
    } catch (error) {
        console.log(error);
    }
}
main()

app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${envs.PORT} 😄`);
})