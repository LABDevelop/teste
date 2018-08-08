// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Ebaaaaa' // contexto léxico 2
    return saudacao    
}

// Objetos são grupos aninhados de nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 27,
    peso: 64,
    endereco: {
        logradouro: 'Rua Batista',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log (cliente.nome)

