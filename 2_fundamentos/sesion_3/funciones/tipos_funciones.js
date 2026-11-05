//funcion declarativa

function sumar(numero1, numero2) {
    let suma = numero1 + numero2
    return suma
}

function restar (numero1, numero2) {
    if (numero1 >= numero2) {
        return numero1 - numero2
    }else {
        return numero2 - numero1
    }
}

//funciones expresivas o anonimas 


const multiplicar = function (numero1, numero2) {
    return numero1 * numero2
}

//paso 1 - sustituyo la palabra function por un flecha => despues de los parentesis
// paso 2 - si la function tiene un unico parametro ni 0 ni 2 ni 7 puedo quitar los parentesis
// paso 3 - si la function tiene dentro de las llaves una sola linea puede quitar las llaves y si esa linea tiene un return debo quitar el return