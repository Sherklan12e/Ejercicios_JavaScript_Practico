const relog = document.getElementById('relog');

function funcionRelog(){
    let fecha = new Date();
    let segundos = fecha.getSeconds()
    let minutos = fecha.getMinutes()
    let horas = fecha.getHours()
    
    relog.textContent = ` ${horas}:${minutos}:${segundos} `
    requestAnimationFrame(funcionRelog)
    
}

requestAnimationFrame(funcionRelog)