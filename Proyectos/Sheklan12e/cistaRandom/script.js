

let Boton = document.getElementById('boton-cambiar-cita')
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');


function generarEntero(max){
    return Math.floor(Math.random() * max);
}
function cambiar(){
    let indiciAleatorio = generarEntero(citas.length);
    console.log(indiciAleatorio)
    citaElem.textContent = `"${citas[indiciAleatorio].texto}"`;
    autorElem.textContent = citas[indiciAleatorio].autor;
}

cambiar();
Boton.addEventListener('click' , () =>{
    cambiar()
    
})


