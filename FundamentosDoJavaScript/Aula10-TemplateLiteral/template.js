const nome = 'Almir';
const idade = 2022 - 1970;
const cidade = 'São Paulo';
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

//console.log('Aluno ' + nome + ' idade ' + idade + ' nacimento ' + cidade);

const apresentacao = `Aluno ${nome}, idade ${idade} e nascido na cidade de ${cidade}`;

console.log(apresentacao);

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

a = []
b = 20
c = true 
d = ''

if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

console.log(a)
console.log(typeof a)
if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}