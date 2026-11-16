import { Router } from "express";
import mascotasRoutes from "./mascotas.routes.js"
import usuariosRoutes from "./usuarios.routes.js"
// import veterinariosRoutes from "./veterinarios.routes.js"

// como este es un fichero de rutas voy a crear una constante que almacene rutas.
const router = Router()


//todas las rutas de nuestras, tiene que haber tantas rutas como tablas en la base de datos. usuarios, mascotas.

router.use('/mascotas', mascotasRoutes)
router.use('/usuarios', usuariosRoutes)
// router.use('/veterinarios', veterinariosRoutes)

export default router