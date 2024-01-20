const botonIncioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");
const cronometro = document.getElementById("cronometro");
let [hora, minuto, segundos] = [0, 0, 0];
let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actulizarr() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minuto++;
    if (minuto / 60 === 1) {
      hora++;
    }
  }

  const segundoFormat = asignar(segundos);
  const minutoFormat = asignar(minuto);
  const horaFormat = asignar(hora);

  cronometro.innerText = `${horaFormat}:${minutoFormat}:${segundoFormat}`;
}

function asignar(unidad) {
  return unidad < 10 ? "0" + unidad : unidad;
}

botonIncioPausa.addEventListener("click", function () {
  if (estadoCronometro == "pausado") {
    intervaloDeTiempo = window.setInterval(actulizarr, 1000);
    botonIncioPausa.innerHTML =
      '<i class="bi bi-pause" id="boton-inicio-pausa"></i>';
    botonIncioPausa.classList.remove("iniciar");
    botonIncioPausa.classList.add("pausar");
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonIncioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonIncioPausa.classList.remove("pausar");
    botonIncioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener('click', function() {
    window.clearInterval(intervaloDeTiempo)
    segundos = 0;
    minuto = 0;
    hora =0;
    cronometro.innerText = '00:00:00';
    botonIncioPausa.classList.remove("pausar");
    botonIncioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
    botonIncioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    
})