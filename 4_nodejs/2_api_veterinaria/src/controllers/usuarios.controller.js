import { selectAllUsers } from "../models/usuarios.model.js";


const getAllUsers = async (req, res) => {
    const usuarios = await selectAllUsers();
    res.json(usuarios)
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const usuario = await selectUserById(id);
    res.json(usuario);
}

export { getAllUsers, getUserById }