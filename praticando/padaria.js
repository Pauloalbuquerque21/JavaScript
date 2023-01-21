let paes = ["pão francês","Pão doce","pão de alho","pão carteira"]
let valores =["1,00","1,50","2,00","1,50"]
var c = 0
console.log(`Hoje temos ${paes.length} tipos de pães `)
/*for(let num in pães){
    console.log(`${pães[num]}:`)
    for(let num1 in valores){
        Console.log(`${valores[num1]} Reais`)
    }
}*/
while(c<=paes.length){
    console.log(`${paes[c]}:`)
    console.log(`${valores[c]}`)
    c++

}
/*
for(let num in paes){
    console.log(`${paes[num]}:\n ${valores[num]}`)
}*/
