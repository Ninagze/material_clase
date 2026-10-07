
// un condicional anidado puede tener mas de una condicion
// siempre la mas restrictiva la primera => mas restrictiva a la mas generica

const edad = 123;

if (edad >= 0 && edad < 18) {
    console.log("Eres menor de edad");
} else if (edad >= 18 && edad <= 110) {
    console.log('Eres mayor de edad')
} else {
    console.log('Valor no valido')
}