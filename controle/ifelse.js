const imprimirNota = function(nota) {
    if(nota > 7) {
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado!!')
    }
}

imprimirNota(10)
imprimirNota(5)
imprimirNota('Epa!') // cuidado

