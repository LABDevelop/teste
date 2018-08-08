//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma()

//função com retorno
function imprimirSoma2(a, b = 1) {
    return (a + b)
}

console.log(imprimirSoma2(2, 3))
console.log(imprimirSoma2(2))