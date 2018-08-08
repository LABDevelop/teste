function teste1(num) {
    if(num > 7) {
        console.log(num) //if só lê uma linhad e código
    }
    console.log('Final')
}

teste1(6)
teste1(9)

function teste2(num) {
    if(num > 7); {  // cuidado com o ';' , não usar em estrutras de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)