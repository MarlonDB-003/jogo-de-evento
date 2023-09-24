const tela = document.querySelector("#tela");
const circle = document.querySelector("#circle");

circle.style.top = getRandomNumber(0, 350) + "px";
circle.style.left = getRandomNumber(0, 550) + "px";

circle.addEventListener("click", () => {
    alert("Você clicou no círculo!");
    moveCircle();
});

document.addEventListener("keydown", (event) => {
    if (event.keyCode === 32) { // Barra de espaço
        moveCircle();
    }
});

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function moveCircle() {
    circle.style.top = getRandomNumber(0, 350) + "px";
    circle.style.left = getRandomNumber(0, 550) + "px";
}