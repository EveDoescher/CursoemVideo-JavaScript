let gen = document.getElementById('gen')
gen.addEventListener('click', generate)

function generate(){
    let num = document.getElementById('txtnum')
    let sel = document.getElementById('seltab')
    
    if (num.value.length == 0){
        window.alert('[ERRO] Insira os dados')
    }else{
        sel.removeAttribute('hidden')
        sel.innerHTML = ''
        let N = Number(num.value)
        for(count = 0;count <= 10;count++){
            res = N*count
            let iten = document.createElement('option')
            iten.value = `tab-${count}`
            iten.text = `${N} X ${count} = ${res}`
            sel.appendChild(iten)
            //console.log(`${N} X ${count} = ${res}`)
        }
    }
}