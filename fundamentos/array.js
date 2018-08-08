const valores = [7, 7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[5])

valores[5] = 10
console.log(valores)
console.log(valores.length) //quantidade de elementos

valores.push({id: 3}, false, null, 'Teste') //insere valores no array
console.log(valores)

console.log(valores.pop()) //remove o ultimo valor do array
delete valores[0] //delete algm valor especifico do array
console.log(valores)

console.log(typeof valores)