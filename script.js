const notas = {
    do: new Audio("sonidos/do.wav"),
    re: new Audio("sonidos/re.wav"),
    mi: new Audio("sonidos/mi.wav"),
    fa: new Audio("sonidos/fa.wav"),
    sol: new Audio("sonidos/sol.wav"),
    la: new Audio("sonidos/la.wav"),
    si: new Audio("sonidos/si.wav"),
};

function tocarNota() {
    const nota = this.id;
    notas[nota].currentTime = 0;
    notas[nota].play();
}

const teclas = document.querySelectorAll("#teclado-virtual button");
teclas.forEach((tecla) => {
    tecla.addEventListener("click", tocarNota);
});