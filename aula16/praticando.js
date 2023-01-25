var quantidade = 10
var c = 0
function pão(n){
    if (n<= quantidade){
        c=quantidade-n
        return 'Claro senhor, como temos ' quantidade ' pães e o senhor pediu' n 'logo sobrarar' c 'pães'
    }else{
        n=n-quantidade
        return 'Descupe senhor, só temos' quantidade 'pães, ou seja, o senhor pedi 'n' a mais'
        
    }
}
let resultado = pão(5)
console.log(resultado)
