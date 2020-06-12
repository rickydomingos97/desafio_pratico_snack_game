let canvas = document.getElementById("snack");
let context = canvas.getContext("2d");

function criarBG () {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * 16 * box);
}

criarBG();