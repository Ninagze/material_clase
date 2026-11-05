// en que dia y hora se produce una actividad.
// necesitamos la actividad parametro de entrada de la funcion
// buscamos dia y hora lo que nos devuelve la funcion
// const resultado =  { dia_semana: lunes, hora: 19:00 }
export function getDayHourByActivity(activityName, listActivities) {
    const resultado = listActivities.find(activity => activity.nombre === activityName)
    return { dia_semana: resultado.dia_semana, hora: resultado.hora }
}

// cuanta plazas quedan en la clase de zumba
// que necesitamos nombre, dia, hora
// devolver const resultado = { "id": 5, "nombre": "Zumba", "dia_semana": "viernes", "hora": "19:30", "plazas": 25 }

export const obtenerPlazasPorActividad = (nombre, dia, hora, listaActividades) => {
    const resultado = listaActividades.find(actividad => actividad.nombre === nombre && actividad.dia_semana === dia && actividad.hora === hora)
    return resultado || 'No hay resultados'
}

// que clases hay en un dia a una hora concreta
// devolver array const resultado = [ { "id": 1, "nombre": "Spinning", "dia_semana": "martes", "hora": "19:00", "plazas": 20 }, { "id": 2, "nombre": "Yoga", "dia_semana": "martes", "hora": "19:00", "plazas": 15 } ]
// necesito dia, hora

export function obtenerClasesPorDiaHora(dia_semana, hora, listaActividades) {
    return listaActividades.filter(actividad => actividad.dia_semana === dia_semana && actividad.hora === hora)
}