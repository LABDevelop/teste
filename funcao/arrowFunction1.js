let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito

console.log(dobro(2))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola'

console.log(ola())