## Backend

## Este backend usa express como framework principal


## Librerias y Estandares a utilizar 


 - Cors -- Este estándar de seguridad que permite compartir o rechazar request/response a ciertas fuentes 
 - Express -- Framework para crear servidor JS 
 - pg -- paquete para conectar el servidor express con Postgres DB
 - sequelize -- es una libreria que permite crear modelos con formas de clases de js o ts, para sincronizar tablas en la db, hacer petiiones etc
 - dotenv -- libreria que lee el archivo .env del estandar profesional para leer variables de  

 ## Inicializacion de dotenv library

 Para inicializar la libreria del dotenv es segun el siguiente comando `require('dotenv').config()`
 una vez que hemos inicializado, podemos leer una variable de entorno que esta guardado en el archivo .env

 `var output = ejemplo process.env.VARIABLEENTORNO`
