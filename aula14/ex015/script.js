function contar(){
    
      var ini = document.getElementById('txtIni')
      var fim    = document.getElementById('txtFim')
      var passo   = document.getElementById('txtPasso')
      var res = document.querySelector('div#res')
      res.innerHTML = ""

      if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '<strong>Impossivel contar!</strong>'
      }
      else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO igual 1')
            p = 1
        }

        if (i < f){
            // Contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
             }
        }else{
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }          
        }
        res.innerHTML += `\u{1F3C1}`
      }
       res.style.textAlign = 'center'
}