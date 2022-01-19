function menorValor(arrProdutos, posicao) {
    let menor = posicao;
    for (let atual = posicao + 1; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[menor].preco ) {
            menor = atual;
        }
    }
    return menor;
}

module.exports = menorValor;
