// Configuracion de nuestro servidor http
import http from "node:http";
import app from "./src/app.js";


// Crear el servidor
const server = http.createServer(app);

const PORT = process.env.PORT || 3000


server.listen(PORT);

// Dos funciones
// funcion que me dice que el servidor esta encendido
server.on('Escuchando', () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})


//funcion que me dice si el servidor ha tenido un error
server.on("Error", (error) => {
    console.log(error)
})