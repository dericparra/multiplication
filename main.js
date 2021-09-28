function contar() {
    let n = document.querySelector('input#number')
    let select = document.querySelector('select#tabuada')

     if ( !n.value.length) {
        window.alert('[ERRO] Faltam dados')
    } else {
        let numero = Number(n.value)
        let multiplicador = 1
        select.innerHTML = ''
        while(multiplicador <= 10) {
            let item = document.createElement('option')
            
            item.text = `${numero} x ${multiplicador} = ${numero*multiplicador}`
            select.appendChild(item)
            multiplicador++
        }
    }
}