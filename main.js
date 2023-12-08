function tocaSom (selectorAudio)  {
    const elemento = document.querySelector(selectorAudio);


  if(elemento != null && elemento.localName === 'audio') {
    elemento.play();
  }

  else{
     console.log('Elemento não encontrado ou seletor inválido');

  }

}

const listadeTeclas =document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = '#som_${instrumento}'; //template string

    tecla.onclick = function ()   {
        tocaSom(idAudio);
    }

tecla.onkeydown = function (evento) {


if (evento.code === 'Space'||evento.code === 'Space')
  tecla.classList.add('ativa');
} 


}

tecla.onkeyuo = function()  {
    tecla.classList.remove('ativa'); 

}



