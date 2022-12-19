// POM ----------------------------------------------------
function tocasom(idelementoaudio) {
    document.querySelector(idelementoaudio).play();  
}
const listadeteclas = document.querySelectorAll('.tecla'); 


let contador = 0;

//enquanto 
while (contador < listadeteclas.length) {
    listadeteclas[contador].onclick = tocasom;
    contador = contador + 1;

    console.log(contador)
}