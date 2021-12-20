function soma(number1, number2) {
    return number1 + number2;
}

console.log(soma(3,5));

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, 'Xereu'));

function multiplica(number1 = 1, number2 = 1) {
    return number1 * number2;
}

console.log(multiplica(soma(4, 5), soma(3, 7)));

console.log(multiplica(soma(4, 5)));

function comParametro(param) {
    console.log(param)
}
comParametro();