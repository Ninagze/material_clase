import { getDayHourByActivity, obtenerPlazasPorActividad, obtenerClasesPorDiaHora } from "./lib/funciones.js"
import { actividades } from '../data/actividades.js'

const diaHoraActividad = getDayHourByActivity('Zumba', actividades)
console.log(diaHoraActividad)

const actividadesPorDiaHora = obtenerClasesPorDiaHora('martes', '19:00', actividades)
console.log(actividadesPorDiaHora)


const plazasActividad = obtenerPlazasPorActividad('Spinning', 'martes', '19:00', actividades)
console.log(plazasActividad)