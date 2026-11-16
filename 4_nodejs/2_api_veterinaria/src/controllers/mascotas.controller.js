// cada controlador va a llamar a un funcion que conecte con la bbdd, es funcion va esta alojada en los modelos.
// el controlador tiene como objetivo principal devolver datos de respuesta, es decir hace res.json()
import { selectAll, selectById, selectSpeciesById, selectAllBySpecie, deletePetById, insertNewPet, updatePetById } from "../models/mascotas.model.js"

const getAll = async (req, res) => {
    const mascotas = await selectAll() //esta funcion estará en el modelo, contendrá el select de la bbdd
    res.json(mascotas)
}

const getById = async (req, res) => {
    console.log(req.params.idMascota)
    const unaMascotaCompleta = await selectById(Number(req.params.idMascota))
    res.json(unaMascotaCompleta)

}

const getBySpecie = async (req, res) => {
    const especie = await selectSpeciesById(Number(req.params.idMascota))
    res.json(especie)
}

const getAllBySpecie = async (req, res) => {
    const listaAnimalesEspecie = await selectAllBySpecie(req.params.especie)
    res.json(listaAnimalesEspecie)
}

// { status: true, message: 'se ha borrado correctamente' }
const deletePet = async (req, res) => {
    const response = await deletePetById(Number(req.params.idMascota))
    res.json(response)
}


const insertPet = async (req, res) => {
    const idnuevaMascota = await insertNewPet(req.body);
    // en la respuesta lo unico que me ha devolver la bbdd es el id
    const mascota = await selectById(idnuevaMascota)
    res.json(mascota)
}


const editPet = async (req, res) => {
    // actualizar tiene req.body y req.params
    const dataMascota = req.body
    const idMascota = Number(req.params.idMascota)

    const respuesta = await updatePetById(idMascota, dataMascota)

    if (respuesta.affectedRows === 1) {
        const mascota = await selectById(idMascota)
        res.json(mascota)
    } else {
        res.json({ status: false, message: "No se ha podido actualizar la mascota" })
    }


}

export { getAll, getById, getBySpecie, getAllBySpecie, insertPet, editPet, deletePet }