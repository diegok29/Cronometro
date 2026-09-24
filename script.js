let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

const display = document.getElementById('display');
const btnIniciar = document.getElementById('btnIniciar');
const btnPausar = document.getElementById('btnPausar');
const btnZerar = document.getElementById('btnZerar');

function formatarTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

function atualizarDisplay() {
  display.textContent = `${formatarTempo(horas)}:${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
}

function atualizarTempo() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;

    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  atualizarDisplay();
}

function iniciar() {
  if (intervalo) return;
  intervalo = setInterval(atualizarTempo, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  pausar();
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
}

btnIniciar.addEventListener('click', iniciar);
btnPausar.addEventListener('click', pausar);
btnZerar.addEventListener('click', zerar);

atualizarDisplay();