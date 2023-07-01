let num = [5,8,2,9,3]
console.log(`Nosso vetor é ${num[0]}`)

num[5] = 6
num.push(7)
num.sort()
console.log(`Nosso vetor é ${num[6]}`)
console.log(num)
/*
for (let pos=0; pos <= num.length; pos++){
    console.log(`Valor de num na pos ${pos} é ${num[pos]}`)

}
*/

for(let pos in num){
    console.log(`Valor de num na pos ${pos} é ${num[pos]}`)
}

var idx = num.indexOf(9)
console.log(idx)
