import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/usuarios.controller.js";

const router = Router()


//obtener todos los usuarios
router.get('/', getAllUsers)

///obtener usuario por id
router.get("/:id", getUserById);

//obtener un usuario completo por su dni

//obtener todos los usuarios de una localidad

//obtener todos los usuarios que aceptan comunicaciones

//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez)

// obtener solo el nombre, dni, telefono de un usuario por id.

//insertar un usuario

//borrar un usuario por id

// actualizar los datos de un usuario por id


export default router;