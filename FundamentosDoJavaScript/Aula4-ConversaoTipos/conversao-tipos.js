// Tipo de dados
// booleanos


// conversão implicita
const numero = 456;
const numeroString = '456';

console.log("numero == numeroString => " + (numero == numeroString));
console.log("numero + numeroString => " + (numero + numeroString));

console.clear();

// conversão explicita
// Number()
// String()

console.log("numero + Number(numeroString) => " + (numero + Number(numeroString)));

console.clear();

const numeroStringBug = '456A';
console.log("Number(numeroString) => " + Number(numeroStringBug));