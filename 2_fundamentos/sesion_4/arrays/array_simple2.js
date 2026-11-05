const numeros = [7, 23, 42, 5, 18, 91, 36, 64, 12, 77]

for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
}


const nombres = ['Ana', 'Luis', 'Marta', 'Carlos', 'Lucía', 'Pedro', 'Elena', 'Javier', 'Sofía', 'Miguel']


function buscarPorPrimeraLetra(letra, lista, posicion) {
    for (let nombre of lista) {
        if (nombre[posicion] === letra) {
            console.log(nombre)
        }
    }
}

buscarPorPrimeraLetra('a', nombres, 1)

