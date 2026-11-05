const productos = [
    {
        nombre: 'Leche desnatada',
        precio: 2,
        cantidad: 10
    },
    {
        nombre: 'pan',
        precio: 1,
        cantidad: 100
    },
    {
        nombre: 'carne',
        precio: 12,
        cantidad: 3
    },
]

console.log(productos[1]['nombre'])
console.log(productos[2].nombre)
console.log("----------------")

for (let producto of productos) {
    console.log(producto.nombre)
}

console.log("----------------")
//saca por pantalla el nombre del producto que cueste menos de 10 euros.

for (let producto of productos) {
    if (producto.precio < 10) {
        console.log(producto.nombre, producto.precio)
    }
}

