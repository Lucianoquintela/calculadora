let tecla = document.getElementById('exibirResultado');

function getResult(value) {
    if (value === "=") {
        tecla.textContent = eval(tecla.textContent);
    } else {
        tecla.textContent += value;
    }
}

function limparResultado() {
    tecla.textContent = "";
}

