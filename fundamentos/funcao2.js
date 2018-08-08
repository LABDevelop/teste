// Armazenando função em uma variavel 
const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(4, 6)

//Armazenando uma função arraow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 6))

//Retorno implícito
const subtracao = (a, b) => a- b
console.log(subtracao(8, 4))

const imprimirValor = a => console.log('Teste')

imprimirValor()