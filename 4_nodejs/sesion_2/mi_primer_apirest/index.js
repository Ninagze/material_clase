import express from 'express'
import { arrayPaises, sanitize } from './data.js'
import { getCountry, deleteCountry, insertCountry , updateCountry } from './controllers/pais.controller.js' 

const app = express()
// configuraciones globales de app
app.use(express.json()) // body enviar un json


//crear rutas, responden desde el navegador o cualquier servicio de lectura apis.

// app.verbo('ruta', funcion)
// ruta estatica
app.get('/saludo', (req, res) => {
    res.end('Hola como estan los maquinas')
})

//ruta estatica
app.get('/nombre', (req, res) => {
    res.end('Ana Gonzalez')
})

//ruta dinamica
app.get('/producto/:nombre/:precio', (req, res) => {
    console.log(req.params)
    res.end(`estoy en ruta dinamica y mis parametros son ${req.params.nombre} y ${req.params.precio}`)
})

//un ruta estatica que me devuelva la fecha actual ( teneis que investigar como sacar la fecha )

app.get('/fecha_de_hoy', (req, res) => {
    const date = new Date()
    res.end(date.toLocaleDateString('es-ES'))
})

// una ruta dinamica que me pregunte un pais y me devuelva su capital. trabajo con arrays
app.get('/pais/:pais', getCountry)

//delete para borrar un pais por id
app.delete('/pais/:id', deleteCountry)

//post para crear un pais, hasta ahora hemos recibido parametros solo por la ruta, ahora tambien vamos a recibir parametros complejos. Para envidio usamos el cuerpo de una peticion http. Body
app.post('/new/pais', insetCountry) 

app.put('/update/pais/:id', updateCountry)


// mostrar por client todo el array de paises con sus datos.




//put para actualizar un pais. vamos a enviar los datos que queremos actualizar y el id del elemento que queremos actualizar


//vamos levantar el servicio de api rest
app.listen(3000, () => {
    console.log('Servidor funcionando')
})