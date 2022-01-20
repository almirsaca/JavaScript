const livros = require('../Aula2-ExibindoLivros/livros');
const menorValor = require('../Aula2-ExibindoLivros/listaMenor');

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];
   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })
   
   console.log(livros)