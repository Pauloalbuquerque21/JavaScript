let paes = ["pão francês","Pão doce","pão de alho","pão carteira"]
let valores =["1,00","1,50","2,00","1,50"]
console.log(`Hoje temos ${pães.length} tipos de pães `)
/*for(let num in pães){
    console.log(`${pães[num]}:`)
    for(let num1 in valores){
        Console.log(`${valores[num1]} Reais`)
    }
}*/
/*
console.log(`${pães.length}`)
console.log(`${pães}`)
while(c<=pães.length){
    console.log(`${pães[c]}:`)
    c++

}*/
for(let num in paes){
    console.log(`${paes[num]}:\n ${valores[num]}`)
}
