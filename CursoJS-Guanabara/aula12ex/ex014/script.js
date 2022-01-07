function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 6) {
        // madrugada
        img.src = "_imgs/madrugada.jpg"
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 6 && hora < 12) {
        // bom dia
        img.src = "_imgs/manha.jpg"
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "_imgs/tarde.jpg"
        document.body.style.background = '#b9846f'
    }
    else {
        // boa noite
        img.src = "_imgs/noite.jpg"
        document.body.style.background = '#515154'
    }
}

