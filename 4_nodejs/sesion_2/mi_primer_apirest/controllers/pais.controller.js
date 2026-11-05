import { arrayPaises } from '../data.js'

export const updateCountry = (req, res) => {
    const data = req.body
    const id = Number(req.params.id)

    //primer paso: buscar el pais completo json por id
    const dataPais = arrayPaises.find(pais => pais.id === id)
    dataPais.capital = data.capital
    res.json(dataPais)

}

export const deleteCountry = (req, res) => {
    const id = Number(req.params.id)
    const resultado = arrayPaises.filter(pais => pais.id !== id)
    res.json(resultado)
}

export const insertCountry = (req, res) => {
    const nuevoPais = req.body
    arrayPaises.push(nuevoPais)
    res.json(arrayPaises)
}

export const getCountry = (req, res) => {
    const country = sanitize(req.params.pais)
    console.log(country)
    const data = arrayPaises.find(item => sanitize(item.pais) === country.toLowerCase())
    if (data !== undefined) {
        res.json(data)
    } else {
        res.end('este pais no esta en mi BBDD')
    }
}