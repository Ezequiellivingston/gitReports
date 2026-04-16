

const creaPersona = (nombre,apellido) => {

    return {
        id: crypto.randomUUID(),
        name: nombre,
        last: apellido,
    }
}


const pepe = creaPersona("pepe", "lopez")

console.log(pepe.name)

debugger

