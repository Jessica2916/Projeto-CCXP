const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("min");
const secundo = document.getElementById("sec");

const lancamento = "06 jan 2023";

function countdown(){
 
    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (dataLanc - hoje) / 1000;
    const dias =  Math.floor((segTotal / 3600 / 24));
    const horas =  Math.floor((segTotal/3600) % 24);
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    day.innerHTML = ` <strong>0${dias}D</strong>`
    hour.innerHTML = ` <strong>0${horas}H</strong>`
    minute.innerHTML = ` <strong>0${minutos}M</strong>`
    secundo.innerHTML = ` <strong>0${segundos}S</strong>`
}

countdown();

setInterval(countdown, 1000);