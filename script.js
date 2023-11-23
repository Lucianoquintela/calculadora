function teclaPressionada() {
   var tecla = document.getElementsByClassName('botoes').value
   console.log(tecla) 

   var tecla1 = tecla
   document.getElementById('exibirResultado').innerHTML = tecla1
}
