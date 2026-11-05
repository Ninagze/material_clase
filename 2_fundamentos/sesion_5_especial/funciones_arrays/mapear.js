// mapear es aplicar la misma operacion (ojo no necesiramente matematica), a todo los elementos de lista.

const numeros = [1, 2, 3, 4, 5]
const dobles = numeros.map(numero => numero * 2)

// for (let numero of numeros) {
//     const doble = numero * 2
//     dobles.push(doble)
// }

// console.log(dobles)

const ciudades = ['Madrid', 'Barcelona', 'Sevilla', 'Coruña', 'Vigo']

const ciudadesMinuscula = ciudades.map(ciudad => ciudad.toLowerCase())
console.log(ciudadesMinuscula)