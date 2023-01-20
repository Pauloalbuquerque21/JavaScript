 /*let num = [5,6,7,8,9]

/* console.log(num[1]) 
num.push(7)
console.log(num[5])
num.lenth
console.log(num.length)
num.sort()
console.log(num.sort())*/
/*
let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} `)
console.log(`O elemento do índice 2 é igual a ${num[2]}`)*/

let valores = [8,1,7,4,2,9]
/* 
console.log("Valores")
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/
/*
for(c=0;c <= valores.length;c++){
    console.log(valores[c])
}

var c=0
while(c<=valores.length){
    console.log(valores[c])
    c=c+1
} 

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

valores.sort()
valores.push(3)
let pos = valores.indexOf(5)
if (pos == -1){
    console.log('Não existe esse elemento no array')
}else{
console.log(`O elemento 3 está na chave ${pos}`)}