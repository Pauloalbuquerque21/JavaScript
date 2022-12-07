// POM ----------------------------------------------------
function tocasompom () {
    document.querySelector('#som_tecla_pom').play();  
}
const listadeteclas = document.querySelectorAll('.tecla'); 


let contador = 0;

//enquanto 
while (contador < 9) {
    listadeteclas[0].onclick = tocasompom;
    contador = contador + 1;

    console.log(contador)
}