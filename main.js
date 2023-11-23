function tocaSom (idElementoAudio)  {
    document.querySelector(idElementoAudio).play();
}

const listadeTeclas = document.querySelectorAll('tecla');

//para
for (let contador = 0; contador < listadeTeclas.length; contador++) {

    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio ='#som_${instrumento}'; //template string

    tecla.onclick = function ()   {
        tocaSom(idAudio);
    }

tecla.onkeydown = function () {
    tecla.classList.add('ativa')
} 




