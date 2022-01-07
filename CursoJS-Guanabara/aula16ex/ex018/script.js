let num = document.querySelector('input#idNum');
let lista = document.querySelector('select#idLista');
let res =  document.querySelector('div#idRes');
let valores = [];

function isNumero(n) {
    return (Number(n) >= 1 && Number(n) <= 100);
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    }  
    else {
        alert('Valor inválido ou já se encontra na lista.');
    }  
    num.value = '';
    num.focus();
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    }
    else {
        var total = valores.length;
        var menor = valores[0];
        var maior = valores[0];
        var soma = 0;
        var media = 0;

        for (const key in valores) {
            soma += valores[key];
            if(valores[key] < menor) {
                menor = valores[key]
            }
            if(valores[key] > maior) {
                maior = valores[key];
            }
        }
        
        res.innerHTML = '';
        if(total == 1) {
            res.innerHTML += `<p>Ao todo temos ${total} número cadastrado.</p>`;
        }
        else {
            res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
        }
        media = soma/total;

        res.innerHTML += `<p>O menor valor informado foi ${menor}`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}`;
        res.innerHTML += `<p>A soma dos números é ${soma}`;
        res.innerHTML += `<p>A média dos números é ${media}`;
    }
}