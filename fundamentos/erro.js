function tratarErroELancar(erro) {
    throw 'Errooooooooo'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Guilherme'} //colocar name o sistema está correto
imprimirNomeGritado(obj)