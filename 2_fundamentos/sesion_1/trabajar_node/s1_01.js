/* 1. primer ejercicio: busca los errores y dime cuales son */

//console.log (ana); 

/** Debemos poner comillas alrededor de "ana" 
 * console.log ("ana");
 */
console.log ("ana")
//const edad = 25;
//edad = 26 ;
let edad = 25;
edad = 26 ;
/**
 * Debemos declarar la variable con let o var para poder cambiar su valor
 * Al colocar const no podemos cambiar el valor de la variable, es una constante.
 */

console.log ("hola");

/* 2. Un producto cuesta 50 euros sin IVA. El IVA es del 21%. Calcula y muestra el importe del IVA y el precio final.*/

let precioSinIVA = 50;
let IVA = 0.21;
let importeIVA = precioSinIVA * IVA;
let precioFinal = precioSinIVA + importeIVA;

console.log("Importe del IVA:", importeIVA); //10.5
console.log("Precio final:", precioFinal);  // 60.5


/* 3. Dada 34567 segundos dame la cantidad de horas minutos y segundos que tiene esta cantidad. */

let totalSegundos = 34567;
let segundosPorMinuto = 60;
let minutosPorHora = 60;
let segundosPorHora = segundosPorMinuto * minutosPorHora;

let horas = Math.floor(totalSegundos / segundosPorHora);
let minutos = Math.floor((totalSegundos % segundosPorHora) / segundosPorMinuto);
let segundos = totalSegundos % segundosPorMinuto;

console.log(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundos}`); 
// horas: 9, Minutos: 36, Segundos: 7 