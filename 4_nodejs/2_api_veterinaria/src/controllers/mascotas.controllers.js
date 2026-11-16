// Cada controlador va a llamar a un funciones que conete con la bbdd, es funcion alojada en modelos.
//el controlador tiene como objetivo principal devolovert datos de respuesta, es decir hace res.jso()
import { selectALL } from "../models/mascotas.models.js";


const getALL = async (req,res) => {
    const mascotas = await selectALL()//esta funcion estara en el modelo contendra el select de la bbdd
    console.log(mascotas)
    res.json(mascotas)

}

const getById = async (req,res) => {

}

const getBySpecie = async (req,res) => {

}

const getBySpecies = async (req,res) => {

}

const insertPet = async (req,res) => {

}

const deletePet = async (req,res) => {

}

const editPet = async (req,res) => {

}

export {getALL,getById,getBySpecie,getBySpecies,insertPet,deletePet,editPet}