function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var titulo = document.getElementById('titulo')
    var sec = document.getElementsByTagName('section')[0]
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora< 12){
        //Bom dia
        titulo.innerHTML = 'Bom dia'
        sec.style.backgroundColor = '#c7bb63'
        document.body.style.backgroundColor = '#e8d776'
        foto.src = 'manha.png'
    }else if (hora>= 12 && hora < 19){
        //Boa tarde
        titulo.innerHTML = 'Boa tarde' 
        sec.style.backgroundColor = '#cc924f'
        document.body.style.backgroundColor = '#ebaa68'
        foto.src = 'tarde.png'
    } else {
        //Boa noite
        titulo.innerHTML = 'Boa noite'
        sec.style.backgroundColor = '#7c34a3'
        document.body.style.backgroundColor = '#ae66de'
        foto.src = 'noite.png'
    }
}