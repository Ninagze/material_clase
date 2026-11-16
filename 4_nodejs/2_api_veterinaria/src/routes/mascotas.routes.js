import { Router } from "express"
import { getAll, getAllBySpecie, getById, getBySpecie, insertPet, deletePet, editPet } from "../controllers/mascotas.controller.js"

const router = Router()

//obtener la lista todas mascotas GET localhost:3000/api/mascotas/
router.get('/', getAll)

//obtener una mascota GET => { id: 1, nombre: 'rocky' , peso:100, raza: perro, }
router.get('/:idMascota', getById) //http://localhost:3000/api/mascotas/2

//obtener la especie de una mascota GET => { especie: gato }
router.get('/:idMascota/especie/', getBySpecie)  //http://localhost:3000/api/mascotas/2/especie

//obtener todas las mascotas por especie GET
router.get('/especie/all/:especie', getAllBySpecie)


//borrar la mascota DELETE
router.delete('/:idMascota', deletePet)


// estas dos peticiones pueden o no recibir parametros de ruta, req.body
//dar de alta una mascota POST localhost:3000/api/mascotas/
router.post('/', insertPet)

//actualizar datos de la mascota mascota PUT/PATCH
router.put('/:idMascota', editPet)

export default router;