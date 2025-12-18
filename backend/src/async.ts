// EJERCICIO NUMERO UNO 
/*Obtén la lista completa de todos los posts disponibles y muéstralos en consola.
URL: https://jsonplaceholder.typicode.com/posts*/

// Construccion de tipado para typescipt del objeto anonimo

interface User{
    userId:number,
    id:number,
    title:string,
    body:string
}

const postRequest = async(): Promise<User[]> =>{
    try {
        console.log('Iniciando peticion para post')
        // INICIAMOS LA PETICION CON EL FETCH CON EL TIPADO RESPONSE Y AWAIT FETCH
        const postResponse:Response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // CONDICIONAL PARA RETORNAR EL ESTATUS SI HAY ERROR DE RED
        if(!postResponse.ok){
           throw new Error(`Error de estado: ${postResponse.status}`)
        }
        // SI ES CORRECTO FORMATEAMOS A JSON
        const datoJson:User[] = await postResponse.json() 
        console.log(datoJson)
        return datoJson;

    } catch (error : any){
        console.error(`Error al inicializar la peticion ${error.message}`)
        throw error
    }
}

postRequest()
  .then(posts =>{
    console.log(`Posts recibidios ${posts}`)
  })
  .catch( err =>{
    console.log(`Error al iniciar peticions ${err.message}`)
  }
  )