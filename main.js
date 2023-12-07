
function tocaSom (selectorAudio)  {
    const elemento = document.querySelector(selectorAudio);


  if(elemento != null && elemento.localName === 'audio') {
    elemento.play();
  }

  else
     console.log('Elemento não encontrado ou seletor inválido');

  }
    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio ='#som_${instrumento}'; //template string

    tecla.onclick = function ()   {
        tocaSom(idAudio);
    }

tecla.onkeydown = function () {
    tecla.classList.add('ativa')
} 





