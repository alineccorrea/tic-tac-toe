//const { once } = require("events");
const celulas = document.querySelectorAll('.celula');
//OU const celulas = document.getElementsByClassName('celula');

document.getElementById("botaoReiniciar").addEventListener("click", iniciarJogo);

let vezDoX = true;

function iniciarJogo()
{
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClique, {once:true} );
        //once:true - Faz executar o código somente no primeiro click - no segundo click não vai executar
    }); 
}

function tratarClique(evento)
{
    //target pega o elemento que foi o evento
    evento.target.textContent = vezDoX ? "X" : "O";
    vezDoX = !vezDoX; // alternando o jogador X e O
}

iniciarJogo();