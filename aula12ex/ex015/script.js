const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
]

const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    window.alert(anoDeCriacao[0].nome)

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)

       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       
       if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','foto-bebe-m.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }else {
                // Idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
       }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','foto-bebe-f.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src','foto-adulto-f.png')
            }else {
                // Idoso
                img.setAttribute('src','foto-idoso-f.png')
            }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
       //res.style.background = '#e2cd9f'
    }
}


