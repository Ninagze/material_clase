// una promesa es un funcion que se puede resolver positivamente o negativamente.

//un promesa siempre se ejecuta igual

// new Promise( (resolve,reject)=>{
// logica de la promesa 
//} )

function pedirNota() {
    return new Promise((resolve, reject) => {
        const nota = 100
        if (nota >= 0 && nota < 5) {
            resolve('suspenso')
        } else if (nota >= 5 && nota <= 10) {
            resolve('aprobado')
        } else {
            reject('nota no valida')
        }
    })
}
//try ejecuta las cosas buenas
try {
    console.log(await pedirNota())
} catch (error) {
    console.log(error)
}
