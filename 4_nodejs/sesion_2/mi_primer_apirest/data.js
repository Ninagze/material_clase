export const arrayPaises = [
    { id: 1, pais: 'España', capital: 'Madrid' },
    { id: 2, pais: 'Francia', capital: 'Paris' },
    { id: 3, pais: 'Alemania', capital: 'Berlin' },
    { id: 4, pais: 'Rusia', capital: 'Checoslovaquia' }
]
// Irán
export function sanitize(palabra) {
    let resultado = palabra.toLowerCase() //irán
    resultado = resultado.replaceAll('á', 'a') //iran
    resultado = resultado.replaceAll('é', 'e')
    resultado = resultado.replaceAll('ú', 'u')
    resultado = resultado.replaceAll('ó', 'o')
    resultado = resultado.replaceAll('í', 'i')
    resultado = resultado.replaceAll('ñ', 'n')
    return resultado //iran
}