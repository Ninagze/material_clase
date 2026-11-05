// BUCLE FOR
// Sirve para repetir un bloque de código un número determinado de veces.
// Sintaxis: for (inicialización; condición; actualización) { ... }

/*
i = 1
i = i + 1 
shortland i++ */

for (let i = 0; i < 5; i++) {
    // 1. INICIALIZACIÓN (let i = 0):
    //    Se ejecuta una sola vez, al empezar el bucle.
    //    Creamos el contador "i" con valor inicial 0.

    // 2. CONDICIÓN (i < 5):
    //    Se evalúa antes de cada vuelta. Si es true, se ejecuta el bloque;
    //    si es false, el bucle termina.

    // 4. CUERPO DEL BUCLE (este bloque):
    //    Es el código que se repite en cada vuelta.
    console.log("Vuelta número:", i);

    // 3. ACTUALIZACIÓN (i++):
    //    Al terminar cada vuelta, se incrementa el contador en 1
    //    y se vuelve al paso 2 a comprobar la condición.
}



// Resultado por consola:
// Vuelta número: 0
// Vuelta número: 1
// Vuelta número: 2
// Vuelta número: 3
// Vuelta número: 4
// Cuando i vale 5, la condición (5 < 5) es false y el bucle se detiene.


for (i = 10; i > 4; i--) {
    console.log(i)
}


/*
10
9
8
7
6
5
*/

