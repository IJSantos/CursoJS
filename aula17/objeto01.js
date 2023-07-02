let amigo = {nome:'José', 
sexo:'M', 
peso: 73.5, 
verifica(n=''){
    if (n == 'José'){
        return true
    }else{
        return false
    }
}}
console.log(amigo.nome, amigo.verifica('José'))