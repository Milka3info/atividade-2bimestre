var span = document.querySelector('span')
var texto = document.querySelector('#original')

var efeito = document.querySelector("#efeito")
var modificado = document.querySelector("#modificado")

texto.addEventListener('keyup', () => {
    span.innerHTML = texto.value.length

    if(efeito.value=="lowercase") {

            modificado.textContent= texto.value.toLowerCase()

  }

    else {

        modificado.textContent= texto.value.toUpperCase()
    }


})

  efeito.addEventListener("change", () => {
       
    if(efeito.value=="lowercase") {

        modificado.textContent= texto.value.toLowerCase()

}

else {

    modificado.textContent= texto.value.toUpperCase()
}


  }) 



