function tabuada() {
    let num = document.getElementById('idNumero');
    let res = document.getElementById('idResultado');
    if(num.value.length == 0) {
        alert('Por favor digite um número!')
    }
    else {
        let n = Number(num.value);
        let c = 1;
        res.innerHTML = '';
        while(c < 10){
            let item = document.createElement('option');
            item.text = `${n} * ${c} = ${n * c}`;
            // para uso em php por exemplo, precisamos do value
            // para saber qual item do select foi selecionado
            item.value = `tab${c}`;
            res.appendChild(item);
            c++;
        }
    }
}