var lista = [10,1, 5, 9, 8, 12, 15];

function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1; 
    if (a > b) return 1; 
};

console.log(lista.sort());

console.log(lista.sort(comparaNumeros));

/*
    Podemos simplificar bastante esse código.
    É possível trocar a função nomeada pra 
    ser anônima. E trocar os três IFs por 
    uma conta simples: a - b.
    Repare que o resultado dessa conta 
    é sempre 0 se forem iguais, 
    -1 se a é menor e 
    1 se b é menor. 
    Exatamente o que precisamos.
*/

console.log(lista.sort((a, b) => a - b));

