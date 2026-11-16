import db from '../config/db.js'

// selectAll
const selectAll = async () => {
    //aqui dentro vamos a hacer la consulta a BBDD => select * from mascota
    const [result] = await db.execute('select * from mascota')
    return result
}


//selectById
const selectById = async (idMascota) => {
    const [result] = await db.execute("select * from mascota where id = ?", [idMascota])
    return result[0]
}

//selectSpeciesById
const selectSpeciesById = async (idMascota) => {
    const [result] = await db.execute("select especie from mascota where id = ?", [idMascota])
    return result[0]
}

const selectAllBySpecie = async (especie) => {
    const [result] = await db.execute('select * from mascota where especie = ?', [especie])
    return result
}

const deletePetById = async (idMascota) => {
    const [result] = await db.execute('delete from mascota where id = ?', [idMascota])
    console.log(result.affectedRows)
    if (result.affectedRows === 1) {
        return { status: true, message: 'La mascota se ha borrado correctamente' }
    } else {
        return { status: false, message: 'Ha ocurrido un error intentalo de nuevo' }
    }
}


const insertNewPet = async ({
    id_dueno,
    nombre,
    especie,
    raza = null,
    sexo = null,
    fecha_nacimiento = null,
    peso_kg = null,
    microchip = null,
    color = null,
    esterilizado = 0,
    fecha_alta = null,
    fecha_fallecimiento = null,
    observaciones = null
}) => {
    const [result] = await db.execute(
        `insert into mascota
            (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones)
         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            id_dueno,
            nombre,
            especie,
            raza,
            sexo,
            fecha_nacimiento,
            peso_kg,
            microchip,
            color,
            esterilizado,
            fecha_alta,
            fecha_fallecimiento,
            observaciones
        ]
    )
    return result.insertId
}


const updatePetById = async (idMascota, {
    id_dueno,
    nombre,
    especie,
    raza = null,
    sexo = null,
    fecha_nacimiento = null,
    peso_kg = null,
    microchip = null,
    color = null,
    esterilizado = 0,
    fecha_alta = null,
    fecha_fallecimiento = null,
    observaciones = null
}) => {

    const [result] = await db.execute(`update mascota
     set id_dueno = ?, nombre = ?, especie = ?, raza = ?, sexo = ?,
         fecha_nacimiento = ?, peso_kg = ?, microchip = ?, color = ?,
         esterilizado = ?, fecha_alta = ?, fecha_fallecimiento = ?, observaciones = ?
     where id = ?`,
        [
            id_dueno,
            nombre,
            especie,
            raza,
            sexo,
            fecha_nacimiento,
            peso_kg,
            microchip,
            color,
            esterilizado,
            fecha_alta,
            fecha_fallecimiento,
            observaciones,
            idMascota   // el id va el último, por el where
        ])
    return result

}


export { selectAll, selectById, selectSpeciesById, selectAllBySpecie, deletePetById, insertNewPet, updatePetById }