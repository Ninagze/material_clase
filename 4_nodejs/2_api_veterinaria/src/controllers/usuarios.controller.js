import { selectAllUsers } from "../models/usuarios.model.js";


const getAllUsers = async (req, res) => {
    const usuarios = await selectAllUsers();
    res.json(usuarios)
}



export { getAllUsers }