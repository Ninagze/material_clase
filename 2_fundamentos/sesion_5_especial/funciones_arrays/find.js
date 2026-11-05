const alumnos = [
    { "nombre": "Lucía Fernández", "edad": 21, "nota": 8 },
    { "nombre": "Carlos Ramírez", "edad": 24, "nota": 5 },
    { "nombre": "Marta Gómez", "edad": 19, "nota": 10 },
    { "nombre": "Javier Ortega", "edad": 27, "nota": 6 },
    { "nombre": "Sofía Navarro", "edad": 22, "nota": 9 },
    { "nombre": "Andrés Molina", "edad": 25, "nota": 3 },
    { "nombre": "Elena Ruiz", "edad": 20, "nota": 7 },
    { "nombre": "Pablo Castillo", "edad": 23, "nota": 4 },
    { "nombre": "Laura Serrano", "edad": 26, "nota": 8 },
    { "nombre": "Diego Herrera", "edad": 18, "nota": 2 }
]

// filter me devolvia todos los elementos que cumplian la condicion.
// find me devuelve solo un elemento el primero que cumple la condicion.

function findByNota(lista, notamin, notamax) {
    for (let alumno of lista) {
        if (alumno.nota >= notamin && alumno.nota < notamax) {
            console.log(alumno)
            break;
        }
    }
}

findByNota(alumnos, 0, 5)

// find
const alumnosSuspensos = alumnos.find(alumno => alumno.nota >= 0 && alumno.nota < 5)
// busca el primer alumnos que tenga entre 20 y 30 años
const alumnosEdad = alumnos.find(alumno => alumno.edad >= 20 && alumno.edad <= 30)