/* 

Convierte una nota numérica en su calificación:

| Nota | Calificación |
|---|---|
| 0 – 4.99 | Suspenso |
| 5 – 6.99 | Aprobado |
| 7 – 8.99 | Notable |
| 9 – 10 | Sobresaliente |
| Menor que 0 o mayor que 10 | Nota no válida |

Prueba con: `-1`, `0`, `4.99`, `5`, `7`, `8.99`, `9`, `10`, `11`.

*/

let nota = a;

if (nota < 0 || nota > 10) {
    console.log("Nota no válida");
} else if (nota < 5) {
    console.log("Suspenso");
} else if (nota < 7) {
    console.log("Aprobado");
} else if (nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}

/*
con -1 es Nota no válida
con 0 es Suspenso
con 4.99 es Suspenso    
con 5 es Aprobado
con 7 es Notable
con 8.99 es Notable
con 9 es Sobresaliente
con 10 es Sobresaliente
con 11 es Nota no válida
*/

/* El mayor de tres
Dados tres números `a`, `b` y `c`, muestra cuál es el mayor. Prueba también el caso de que dos sean iguales.
*/

let a = 1;
let b = 2;
let c = 8;

if ( a >= b && a >= c) {
    console.log(`El mayor es a`);
} else if (b >= c ) {    
    console.log("El mayor es b");
}else {
    console.log("El mayor es c");
}

//*condicional aninadado

let d = 1;
let e = 2;
let f = 8;


if (d >= e) {
    if (d >= f) {
        console.log(`El mayor es d`);
    } else {
        console.log("El mayor es f");
    }
} else {
    if (e >= f) {
        console.log("El mayor es e");
    } else {
        console.log("El mayor es f");
    }
}

/*

El precio de la entrada cine depende de la edad y del día:

- Menores de 12 o de 65 en adelante: 5 € cualquier día.
- Miércoles (día del espectador): 6 €.
- Resto: 9 €.

Crea las variables `edad` y `dia` (texto, por ejemplo `"miércoles"`) y muestra el precio.

Prueba: 10 años en lunes → 5 €. 30 años en miércoles → 6 €. 70 años en miércoles → 5 €. 30 años en sábado → 9 €.

¿Importa el orden en el que compruebas las condiciones? ¿Por qué?

*/

const edadLimiteNino = 12;
const edadJubilacion = 65;
const precioReducido = 5;
const precioNormal = 9;
const precioMiercoles = 6; 
const diaEspectador = "miércoles";
let edad = 30;
let dia = "sabado"; 

if (edad < edadLimiteNino || edad >= edadJubilacion) {
    console.log(`El precio de la entrada es ${precioReducido} €`);
}
else if (dia === diaEspectador) {
    console.log(`El precio de la entrada es ${precioMiercoles} €`);
}else{
    console.log(`El precio de la entrada es ${precioNormal} €`); 
}