const anos = document.getElementById('ano');
const meses = document.getElementById('mes');
const dias = document.getElementById('dia');
const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let ano = dateToday.getFullYear();
    let mes = dateToday.getMonth();
    let dia = dateToday.getDate();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (ano < 1000) ano = '0' + ano;
    if (mes < 10) mes = '0' + mes;
    if (dia < 10) dia = '0' + dia;
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    anos.textContent = ano;
    meses.textContent = mes;
    dias.textContent = dia;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})