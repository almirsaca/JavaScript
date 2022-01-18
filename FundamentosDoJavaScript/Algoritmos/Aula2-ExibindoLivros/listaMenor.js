function menorValor(arrProdutos) {
    let menorPreco = 0;
    for (let atual = 1; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[menorPreco].preco ) {
            menorPreco = atual;
        }
    }
    return menorPreco;
}

module.exports = menorValor;
