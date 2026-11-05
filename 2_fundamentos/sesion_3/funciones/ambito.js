function sumar(n1, n2) {
    let resultado = n1 + n2
    return resultado;
}

function restar(n1, n2) {
    let resultado = n1 - n2
    return resultado
}

function multiplicar(n1, n2) {
    let resultado = n1 * n2
    return resultado
}

// ambito global
let miBolsillo = sumar(12, 3)
let multiplicacion = multiplicar(10, 10)
console.log(miBolsillo)
console.log(multiplicacion)
