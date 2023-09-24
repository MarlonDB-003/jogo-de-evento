/////Eventos do mouse/////////////
var elemento = document.getElementById('elemento');

elemento.addEventListener('mouseover', function() {
    elemento.style.backgroundColor = '#e8b13f';
    elemento.innerHTML = 'Remova a seta do Mouse';
});

elemento.addEventListener('mouseout', function() {
    elemento.style.backgroundColor = '';
    elemento.innerHTML = 'Passe o mouse sobre mim';
});

// Seleciona o elemento HTML onde você deseja exibir a posição do mouse
var info = document.getElementById('info');

// Função que será executada sempre que o mouse se mover sobre o elemento
function mostrarPosicaoMouse(event) {
    // Obtém a posição atual do mouse a partir do evento
    var x = event.clientX;
    var y = event.clientY;

    // Atualiza o conteúdo do elemento com a posição do mouse
    info.innerHTML = 'Posição do mouse na tela: x=' + x + ' y=' + y;
}


// Adiciona o evento 'mousemove' ao elemento que você deseja rastrear
document.addEventListener('mousemove', mostrarPosicaoMouse);

/*Jogo */
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;
var xAleatorio;
var yAleatorio;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function LimpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {

    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
}

function sorteiaPosicao(maximo) {

    return Math.floor(Math.random() * maximo);
}

function atualizaTela() {
    LimpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);

}

setInterval(atualizaTela, 1000);

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if ((x > xAleatorio - raio) &&
        (x < xAleatorio + raio) &&
        (y > yAleatorio - raio) &&
        (y < yAleatorio + raio)) {

        alert('Acertou Mizeravi!');

    }


}

tela.onclick = dispara;