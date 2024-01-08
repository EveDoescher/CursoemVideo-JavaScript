var verif = document.getElementById('verif')
verif.addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtyear').value
    var res = document.getElementById('res')
    if (fano.length == 0 || fano > ano){
        window.alert('[ERRO] Valores inválidos')
    }else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var img = document.createElement('img')
        img.style.width = '250px'
        img.setAttribute('id', 'foto')
        var sex = ''
        if (radsex[0].checked){
            sex = 'Homem'
            if (idade >= 0 && idade <=3 ){
                //bebe
                img.setAttribute('src', 'img/bebe_m.png')
            }else if(idade < 13){
                //Criança
                img.setAttribute('src', 'img/crianca_m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem_m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adulto_m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'img/idoso_m.png')
            }
        } else{
            sex = 'Mulher'
            if (idade >= 0 && idade <=3 ){
                //bebe
                img.setAttribute('src', 'img/bebe_f.png')
            }else if(idade < 13){
                //Criança
                img.setAttribute('src', 'img/crianca_f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem_f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/adulto_f.png')
            }else {
                //Idoso
                img.setAttribute('src', 'img/idoso_f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${sex} com ${idade} anos</p>`
        res.appendChild(img)
    }
}