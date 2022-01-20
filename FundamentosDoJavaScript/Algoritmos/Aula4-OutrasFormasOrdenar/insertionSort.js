const livros = require('../Aula2-ExibindoLivros/livros');

function insertionSort(lista) {

    lista.forEach( (element, atual) => {
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
        
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            analise--;
        }
    });

    console.log(lista);
}

console.log(livros[0]);

//insertionSort(livros);