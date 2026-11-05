// configuracion de nuestro servidor http
import http from "node:http";
import app from "./src/app.js";


//Crear el servidor

const server = http.createServer(app);

//Levantar el servidor

const PORT = 3000;
server .listen(PORT)

//Dos funciones
//Funcion que me dice que el servidor esta encendido
server.on('Escuchando', ()=> {
    console.log(`Servidor escuchando en el puerto ${PORT}`)

})

//Funcion que me dice si el servidor ha tenido un error
server.on('Error', (error) => {
    console.log('Error')
})