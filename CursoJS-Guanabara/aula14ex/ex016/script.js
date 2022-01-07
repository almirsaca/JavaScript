let ini = document.getElementById('idInicio');
let fim = document.getElementById('idFim');
let passo = document.getElementById('idPasso');

function contar() {
    if(!ini.value.length || !fim.value.length || !passo.value.length) {
        alert('[ERRO] Faltam dados!!!');
        res.innerHTML = 'Impossível contar.'
    }
    else {
        if(Number(passo.value) <= 0) {
            alert('[ERRO] Passo inválido, considerando passo = 1.');
            passo.value = 1;
        }
        execContagem();
    }
}

function execContagem() {
    var res = document.getElementById('idRes');
    res.innerHTML = 'Contando: <br>';

    var i = Number(ini.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if(i < f)
    {
        for(var c = i; c <= f; c+=p) {
            res.innerHTML += `${c}`;
            if(c < f) {
                res.innerHTML += ` \u{1F449}`;
            }
        }
    }
    else {
        for(var c = i; c >= f; c-=p) {
            res.innerHTML += `${c}`;
            if(c > f) {
                res.innerHTML += ` \u{1F449}`;
            }
        }
    }
    res.innerHTML += ` \u{1F3C1}`;
}