function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e teste novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var decada = ''
        // criar o elemento no html aqui no java script
        // <img id='foto'>
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
        }
        else {
            genero = 'mulher'
        }
        
        // bebe
        if (idade < 10) {
            decada = 'bebe'
        } // Jovem
        else if (idade < 21) {
            decada = 'jovem'
        } // Adulto
        else if (idade < 50) {
            decada = 'adulto'
        } // Idoso
        else {
            decada = 'idoso'
        }
        img.setAttribute('src', `_imgs/${decada}-${genero}.jpg`)

        // Centraliza o html by script
        res.style.textalign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}