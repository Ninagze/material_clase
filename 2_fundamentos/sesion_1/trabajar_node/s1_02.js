/* 1 - Convierte una temperatura en grados Celsius a Fahrenheit.
La fórmula es F = C × 9 / 5 + 32.  OJO con los numeros magicos 

Prueba también con 0, 100 y -40. ¿Qué pasa con -40?

 */
//prueba con 100
const factorConversion = 9 / 5;
const puntoCongelacion = 32;
let gradosCelsius = 100 ;

const gradosFahrenheit = gradosCelsius * factorConversion + puntoCongelacion;
console.log("Fahrenheit:", gradosFahrenheit);
/*resultados 
100°C = 212°F
0°C = 32°F
-40°C = -40°F */

/* Sin ejecutarlo, escribe en un papel qué valor tiene cada variable después de cada línea. Después ejecútalo y comprueba.  */
let a = 5; 
let b = a + 2; // b = 7
a = a * 2; // a = 5 * 2 = 10
let c = a + b;  // c = 10 + 7 = 17
b = b - 1; // b = 7 - 1 = 6
console.log(a, b, c);   // // a = 10, b = 6, c = 17

/*  Tienes let x = 3; y let y = 8;. Intercambia sus valores para que x valga 8 e y valga 3. No puedes escribir los números 3 ni 8 otra vez. */

let x = 3;
let y = 8;
const temp = x ;
x = y;
y = temp;
console.log(x, y); // x = 8, y = 3

/* Calcula tu edad en dias , ¿cuantos dias habeis vivido cada uno? calcularlo con vuestra y con 44. */

const diasDelAño = 365 ;
const edadAna = 22;
const edadProfe = 44;
const diasVividosAna = edadAna * diasDelAño;
const diasVividosProfe = edadProfe * diasDelAño;
console.log("Ana ha vivido:", diasVividosAna, "días");
console.log("El profesor ha vivido:", diasVividosProfe, "días");


/* Dividir la cuenta:  Una cena cuesta 84 €, sois 4 personas y queréis dejar un 10 % de propina. Muestra la propina, el total y cuánto paga cada uno.
 */
const totalCena = 84;
const totalPersonas = 4;
const propina = totalCena * 0.10;
const totalConPropina = totalCena + propina;
const pagoPorPersona = totalConPropina / totalPersonas;
console.log("Propina:", propina.toFixed(2), "€");
console.log("Total con propina:", totalConPropina.toFixed(2), "€");
console.log("Pago por persona:", pagoPorPersona.toFixed(2), "€");

/* Cajero automatico. Un cajero tiene billetes de 50, 20, 10 y 5 €. Dada una cantidad (múltiplo de 5), calcula cuántos billetes de cada tipo entrega, usando siempre los más grandes posibles. */

let cantidad = 185;
console.log(`Cantidad: ${cantidad} €`);

const billetes50 = Math.floor(cantidad / 50);
cantidad = cantidad % 50;

const billetes20 = Math.floor(cantidad / 20);
cantidad = cantidad % 20;

const billetes10 = Math.floor(cantidad / 10);
cantidad = cantidad % 10;

const billetes5 = Math.floor(cantidad / 5);
cantidad = cantidad % 5;

console.log(`Billetes de 50: ${billetes50}`);
console.log(`Billetes de 20: ${billetes20}`);
console.log(`Billetes de 10: ${billetes10}`);
console.log(`Billetes de 5: ${billetes5}`);

