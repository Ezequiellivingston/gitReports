

const creaPersona = (nombre,apellido) => {

    return {
        id: crypto.randomUUID(),
        name: nombre,
        last: apellido,
    }
}


const pepe = creaPersona("pepe", "lopez")

debugger
debugger
console.log(pepe.name)



