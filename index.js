const DisplayValorAnterior = document.getElementById ("valor-anterior");
const DisplayValorActual = document.getElementById("valor-actual")

const botonesNumero = document.querySelectorAll (".numero");
const botonesOperador = document.querySelectorAll(".operador");

const display = new Display(DisplayValorAnterior, DisplayValorActual);

botonesNumero.forEach(boton => {
    boton.addEventListener("click", () => {
        display.addNumber(boton.innerHTML)
    });
});
botonesOperador.forEach(boton => {
    boton.addEventListener("click", () =>{
        display.computar(boton.value)
    });
});