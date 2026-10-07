// es evaluador de casos.

let color = 'ROJO'

// existen una funciones en javascript toLowerCase() y toUpperCase()
// traductor de color => ingles 

switch (color.toLowerCase()) {

    case "amarillo":
        console.log('yellow')
        break;

    case "azul":
        console.log('blue')
        break;

    case "verde":
        console.log('green')
        break;

    case "rojo":
    case "bermellon":
        console.log('red')
        break;

    default:
        console.log('el color no esta dentro del diccionario')
        break;

}

