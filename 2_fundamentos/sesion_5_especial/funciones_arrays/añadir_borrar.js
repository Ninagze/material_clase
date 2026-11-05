const animales = ['Leon', 'Gato', 'Perro']
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

// vamos primero con las funciones para introducir elementos en un array.

// push(): inserta elementos por el final.
let animal = 'Cuervo'
animales.push('Hipopotamo', animal)
//console.log(animales)


//  unshift(): insertar por el principio
let otroAnimal = 'Rana'
animales.unshift(otroAnimal)
//console.log(animales)


// pop() elimina elementos por el final, tengo ejecutarlo tantas veces como quiere eliminar.
animales.pop() // 'Cuervo'


// shift(). Elimina elementos por el principio
animales.shift() // rana
console.log(animales)


// hacer un push de un alumno.
const nuevoAlumno = {
    nombre: "Mario Salazar",
    edad: 28,
    nota: 10
}

alumnos.push(nuevoAlumno) //insertar por el final
alumnos.pop() // eliminar por el final
alumnos.unshift(nuevoAlumno) // insertar por inicio
alumnos.shift() // eliminar por inicio.