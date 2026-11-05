const productos = [
  { nombre: "Camiseta", precio: 15.99, cantidad: 10 },
  { nombre: "Pantalón vaquero", precio: 39.95, cantidad: 5 },
  { nombre: "Zapatillas deportivas", precio: 59.9, cantidad: 8 },
  { nombre: "Sudadera", precio: 29.99, cantidad: 0 },
  { nombre: "Gorra", precio: 12.5, cantidad: 15 },
  { nombre: "Auriculares", precio: 24.99, cantidad: 12 },
  { nombre: "Ratón inalámbrico", precio: 18.75, cantidad: 20 },
  { nombre: "Teclado mecánico", precio: 79.0, cantidad: 3 },
  { nombre: "Monitor 24\"", precio: 149.99, cantidad: 4 },
  { nombre: "Memoria USB 64GB", precio: 9.99, cantidad: 30 },
  { nombre: "Lámpara de escritorio", precio: 22.4, cantidad: 7 },
  { nombre: "Taza de cerámica", precio: 6.5, cantidad: 25 },
  { nombre: "Cojín", precio: 11.99, cantidad: 0 },
  { nombre: "Sartén antiadherente", precio: 27.85, cantidad: 6 },
  { nombre: "Juego de toallas", precio: 19.9, cantidad: 9 },
  { nombre: "Café en grano 1kg", precio: 14.2, cantidad: 18 },
  { nombre: "Aceite de oliva 1L", precio: 8.95, cantidad: 40 },
  { nombre: "Chocolate negro", precio: 2.35, cantidad: 50 },
  { nombre: "Mochila", precio: 34.99, cantidad: 2 },
  { nombre: "Botella reutilizable", precio: 13.45, cantidad: 11 },
];

// cuantos productos no tenemos stock 
// sin perder cantidad 0 sacar los cantidad 5

function filtrarPorCantidad (lista, cantidad ){

    for (let producto of productos) {
        if (producto.cantidad === 0) {
        console.log(producto);
        }
    }
}

filtrarPorCantidad(productos, 0);
console.log('-----------------')
filtrarPorCantidad(productos, 5);

//dame productos que empiecen por la a
//1 -recorrer el listado
//2 - operaciom dentro del bucle
//3 - es una condicion? condicional
//4 - se puede repetir ? funcion

function filtrarPorNombre(items) {  
    for (let item of items){
        if(item.nombre[0].toLowerCase() === 'a'){
        console.log(item);
        }

    }   
}



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

//vamos primero con las funciones para introducir elementos en un array.
// push () inserta elementos por el final.

let animal = 'Cuervo'
animales.push('Hipopotamo', animal)
console.log(animales)

// insertar por el principio unshift()
let otroAnimal = 'Rana'
animales.unshift(otroAnimal)
console.log(animales)

// pop() elimina elementos por el final, tengo que ejecutarlo tantas veces como quiera eliminar.

animales.pop() 

//shift() elimina elementos por el principio

animales.shift()

console.log(animales)