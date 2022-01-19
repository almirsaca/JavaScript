const livros = require('../Aula2-ExibindoLivros/livros');
const menorValor = require('../Aula2-ExibindoLivros/listaMenor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros , atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    console.log('Posição', atual);
    console.log('Livro atual', livros[atual]);
    console.log('Livro menor', livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);
