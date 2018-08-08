const fabricante = ['Mercedes', 'BMW', 'Audi']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)