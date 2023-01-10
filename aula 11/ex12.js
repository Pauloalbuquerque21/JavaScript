//var hora = 12
//console.log(`Agora são exatamente ${hora} horas`)
//if (hora < 12){
//    console.log('Bom dia!')
//}else if (hora <= 18){
//    console.log('Boa Tarde!')
//}else{
//    console.log('Boa Noite!')
//}

var hora = 12
var dia = 'pm'
console.log(`Agora são exatamente ${hora} ${dia} houres`)
if (hora < 12 && dia == 'am'){
    console.log('Good morning!')
}else if (hora < 6 && dia =='pm'){
    console.log('Good afternoon!')
}else (6<=hora<=12 && dia =='pm')
{
    console.log('Good evening')
}