const entradaRojo = document.getElementById('rojo');
const entradaVerde = document.getElementById('verde');
const entradaAzul = document.getElementById('azul');

const textRojo = document.getElementById('texto-rojo');
const textVerde = document.getElementById('texto-verde');
const textAzul = document.getElementById('texto-azul');

let rojo = entradaRojo.value;
let verde = entradaVerde.value;
let azul = entradaAzul.value;


textRojo.innerText = rojo;
textAzul.innerText= azul
textVerde.innerText = verde

function actulizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// para actulizar el input

entradaRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textRojo.textContent = rojo;
    actulizarColor(rojo,verde,azul);
})

entradaAzul.addEventListener('change' , () => {
    azul = entradaAzul.value;
    textAzul.textContent = azul
    actulizarColor(rojo,verde,azul)
})

entradaVerde.addEventListener('change', () => {
    verde = entradaVerde.value;
    textVerde.textContent = verde
    actulizarColor(rojo,verde,azul)
})
// para actulizar Green (verde)

