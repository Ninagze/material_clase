// el orden de los parametros es muy importante se debe siempre cumplir
// primero pone siempre todos los parametro obligatorios y luego todos los optativos

function getNameComplete(name, surname = "Lopez") {
    console.log(`${name} ${surname}`)
}


getNameComplete('Juan')
getNameComplete('Juan', 'Perez')