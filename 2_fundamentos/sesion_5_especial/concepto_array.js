const lista_nombre = ['Lucia', 'Juan', 'Pepe']
console.log(lista_nombre[1]) // juan
// json - array asociativo
// eliminamos el concepto de posicion por el concepto de clave-valor.

const producto = {
    nombre: 'Leche desnatada',
    precio: 2,
    cantidad: 10,
    stock: true
}

// como extraemos los datos de json si no tenemos posicion
// nomenclatura tradicional de arrays
console.log(producto['nombre']) // leche desnatada
// nomenclatura de json javascript que es con punto.
console.log(producto.nombre) // Leche desnatada

