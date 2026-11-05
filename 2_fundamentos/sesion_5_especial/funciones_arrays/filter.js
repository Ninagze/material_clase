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

// dame productos que empiecen por a
// 1 - recorrer el listado ✅
// 2 - operacion dentro del bucle ✅
// 3 - ¿Es una condición ? condicional ✅
// 4 - ¿se puede repetir? funcion


function filtrarPorLetra(lista, letra) {
    for (let item of lista) {
        if (item.nombre[0].toLowerCase() === letra) {
            console.log(item)
        }
    }
}

function filtrarPorPrecio(cosas, preciomin, preciomax) {
    for (let cosa of cosas) {
        if (cosa.precio >= preciomin && cosa.precio <= preciomax) {
            console.log(cosa)
        }
    }
}

function filtrarPorCantidad(lista, cantidad) {
    for (let producto of lista) {
        if (producto.cantidad === cantidad) {
            console.log(producto)
        }
    }
}

filtrarPorCantidad(productos, 0)
console.log('--------------')
filtrarPorCantidad(productos, 5)
console.log('--------------')
filtrarPorLetra(productos, 'b')
console.log('--------------')
filtrarPorLetra(productos, 'm')
console.log('--------------')
filtrarPorPrecio(productos, 10, 20)
console.log('--------------')

/// filter me permite recorre un array y filtrarlo por una condicion. Devuelve un array
// filtrar por cantidad mayor que n
const productoCantidadMayorque10 = productos.filter(producto => producto.cantidad > 10)
console.log(productoCantidadMayorque10)

// filtrar productos por precio menor que 20
const productoPrecioMenorque20 = productos.filter(producto => producto.precio < 20)

//filtrar productos por nombre 
const productosPorNombre = productos.filter(producto => producto.nombre.toLowerCase().includes("é"))
console.log(productosPorNombre)