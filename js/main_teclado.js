/////Eventos do teclado/////////////
var campoTexto = document.getElementById('campoTexto');
var output = document.getElementById('output');

campoTexto.addEventListener('keydown', function(event) {
    output.textContent = 'Evento: keydown, Código da Tecla: ' + event.keyCode;
    output.style.backgroundColor = 'red';
});

campoTexto.addEventListener('keyup', function(event) {
    output.textContent = 'Evento: keyup, Código da Tecla: ' + event.keyCode;
    output.style.backgroundColor = 'aqua';
});

campoTexto.addEventListener('keypress', function(event) {
    output.textContent = 'Evento: keypress, Caractere: ' + event.key;
    output.style.backgroundColor = 'blue';
});

/* Jogo */
const tela = document.querySelector("#tela");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

let posX = 20;
let posY = 20;
let esquerda = 37;
let cima = 38;
let direita = 39;
let baixo = 40;

let mover = 10;

function desenhaCircle(posX, posY, raio) {
    pincel.fillStyle = "greenyellow";
    pincel.beginPath();
    pincel.arc(posX, posY, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limparTela() {
    pincel.clearRect(0, 0, 600, 400);
    pincel.fillStyle = "#573bc4";
    pincel.fillRect(0, 0, 600, 400);
}

function updateTela() {
    limparTela();
    desenhaCircle(posX, posY, 10);
}

setInterval(updateTela, 24);

function capturaTecla(evento) {
    if (evento.keyCode == esquerda) {
        if (posX > 10) {
            posX = posX - mover;
        } else {
            alert('Voce Bateu na Parede')
        }
    } else if (evento.keyCode == cima) {
        if (posY > 10) {
            posY = posY - mover;
        } else {
            alert('Voce Bateu na Parede')
        }
    } else if (evento.keyCode == direita) {
        if (posX < 590) {
            posX = posX + mover;
        } else {
            alert('Voce Bateu na Parede')
        }
    } else if (evento.keyCode == baixo) {
        if (posY < 390) {
            posY = posY + mover;
        } else {
            alert('Voce Bateu na Parede')
        }

    }


}
document.onkeydown = capturaTecla;