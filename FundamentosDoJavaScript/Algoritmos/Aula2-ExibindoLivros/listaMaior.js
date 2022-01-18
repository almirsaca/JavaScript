const livros = require('./livros');

let menorPreco = 0;
for (let atual = 1; atual < livros.length; atual++) {
    if(livros[atual].preco > livros[menorPreco].preco ) {
        menorPreco = atual;
    }
}

console.log(`O livro mais caro custa ${livros[menorPreco].preco} e o titulo é ${livros[menorPreco].Titulo}`);