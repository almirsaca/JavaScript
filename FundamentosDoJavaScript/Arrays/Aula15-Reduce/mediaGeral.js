console.clear();

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPhyton = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
    return notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length
}

console.log(mediaSala(salaJS));
console.log(mediaSala(salaJava));
console.log(mediaSala(salaPhyton));

const notas = [10, 6.5, 8, 7];

const media = notas.reduce( (previous, current) => current + previous, 0) / notas.length;

console.log(media);

const numeros = [43, 50, 65, 12]
function operacaoNumerica(acum, atual) {
    return atual + acum;
}
   
const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma);
