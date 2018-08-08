const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //Não tem 5 letras, mas ele não da erro, traz em branco
console.log(escola.charCodeAt(3)) //Valor unicode
console.log(escola.indexOf('3')) //

console.log(escola.substring(1)) //indice inicial
console.log(escola.substring(0, 3)) //indice inicial e final

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(',')) //Transforma em array