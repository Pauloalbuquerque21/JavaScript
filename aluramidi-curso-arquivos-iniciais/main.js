// POM ----------------------------------------------------
function tocasompom () {
    document.querySelector('#som_tecla_pom').play();  
}
const listadeteclas = document.querySelectorAll('.tecla'); 


let contador = 0;

//enquanto 
while (contador < listadeteclas.length) {
    listadeteclas[contador].onclick = tocasompom;
    contador = contador + 1;

    console.log(contador)
}