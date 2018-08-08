const nota = [7.7, 6.6, 4.4, 9.1]

// Sem callback
let notasBaixas1 = []
for (let i in nota) {
    if (nota[i] < 7) {
        notasBaixas1.push(nota[i])
    }
}

console.log(notasBaixas1)

// Com callback
notasBaixas2 = nota.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = nota.filter(notasMenorQue7)
console.log(notasBaixas3)