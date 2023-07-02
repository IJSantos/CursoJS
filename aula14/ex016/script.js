var select = document.getElementById("seltab")

function tabuada(){
    select.options.length = 0;
    var num = document.getElementById("txtNumber")

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else {
        var n = Number(num.value)
        // for (let c = 1; c <= 10; c++){
        //     var r = n * c
        //     var t = `${n} * ${c} = ${r}`
    
        //     addOption(t)
        // }

        let c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            select.appendChild(item)
            c++
        }
    }
}

function addOption(valor) {
    var option = new Option(valor, valor);
    select.add(option);
}