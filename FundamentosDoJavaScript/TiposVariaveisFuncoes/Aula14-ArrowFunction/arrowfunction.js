
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (n1, n2) => {
    if(n1 > 9 || n2 > 9) {
        return 'Somente números de 1 a 9';
    } 
    else {
        return n1 + n2;
    }
}

console.log(somaNumerosPequenos(1,2));
