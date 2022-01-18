const precosLivros = [10, 25, 15, 30, 50, 45, 20, 5];

let menorPreco = 0;
for (let atual = 1; atual < precosLivros.length; atual++) {
    if(precosLivros[atual] < precosLivros[menorPreco] ) {
        menorPreco = atual;
    }
}

console.log(`O livro mais barato custa ${precosLivros[menorPreco]}`);
