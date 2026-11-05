// Bucle while: repite el bloque mientras la condición sea true (Mientras que....)

// 1. Variable que controla el bucle, se declara antes del while
let contador = 1;

// 2. Antes de cada vuelta se evalúa la condición
while (contador <= 5) {

    // 3. Código que se repite en cada vuelta
    console.log("Vuelta número " + contador);

    // 4. Actualizamos el contador; sin esto habría un bucle infinito
    contador++;
}

// 5. Cuando la condición es false, el bucle termina y continúa el código
console.log("Fin del bucle");
