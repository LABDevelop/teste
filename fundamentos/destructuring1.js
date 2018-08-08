// novo recurso ES2015
const pessoa = {
    nome: 'Guilherme',
    telefone: 11,
    idade: 27,
    endereco: {
        rua: 'Mogi',
        numero: 149
    }
}

const {nome, telefone} = pessoa
console.log(nome, telefone)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num)

