var btn_contar = document.getElementById('contar')
btn_contar.addEventListener('click', contar)

function contar(){
    let inicio = document.getElementById('txtstart').value
    let fim = document.getElementById('txtend').value
    let passo = document.getElementById('txtpass').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0 ){
        window.alert('FALTAM DADOS!')
        res.innerHTML='Impossível contar'
    }else {
        if (passo == 0){
        window.alert(`Passo não pode ser 0 o valor considerado será 1`)
        passo = 1
        }
        res.innerHTML = 'Contando: '
        if (inicio < fim){
        for (inicio; inicio <= fim;inicio = Number(passo) + Number(inicio) ){
            res.innerHTML +=`${inicio} &#129312`
        }
        } else {
            for (inicio; inicio >= fim;inicio = Number(inicio) - Number(passo)  ){
                res.innerHTML +=`${inicio} &#129312`
            }
        }
        res.innerHTML += '&#127937'
    }
    
}