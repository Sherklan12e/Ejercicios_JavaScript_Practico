const butons = document.getElementById('cambiar-color-id');
const jugar_buton = document.getElementById('jugar');
const pregunta = document.querySelector('.pregunta')
const parrafo = document.getElementsByClassName('.imagen')

function random_Num(){
    return  Math.floor(Math.random() * 20);
}
function detalles(){
    let randomnum = random_Num()

    let details = document.createElement('p')
    pregunta.insertAdjacentElement('afterend', details)
    pregunta.remove()
    details.textContent = 'El jugo trata de Adivinar el numero entre el 1 y el 20 '
    details.classList.add('pregunta')


    // Imput
    let Input = document.createElement('input')
    Input.type = 'number'
    Input.min = 0;
    Input.max = 20;
    Input.classList.add('writenumber')
    jugar_buton.insertAdjacentElement('afterend', Input)
    jugar_buton.remove()
    // crear nuevo botom

    let botonenviar = document.createElement('button')
    botonenviar.classList.add('eviar')
    botonenviar.textContent = 'Enviar'
    Input.insertAdjacentElement('afterend', botonenviar)

    console.log(randomnum)

    count = 0
    botonenviar.addEventListener('click', function(){
        count ++;
        console.log(count)
        
        if (Input.value == randomnum){
            let ganaste = document.createElement('p')
            ganaste.textContent = 'Ganaste'
            details.insertAdjacentElement('afterend', ganaste)
        }else if(Input.value > randomnum){
            let alto = document.createElement('p')
            alto.textContent = 'El numero es muy grande!! Tu puedes '
            details.insertAdjacentElement('afterbegin', alto)
            
        } else if (Input.value < randomnum){
            let pequeno = document.createElement('p')
            pequeno.textContent = 'El numero es muy pequeño!! Vamo que puedes'
            details.insertAdjacentElement('afterbegin', pequeno)
        }




        if (count==5){
            botonenviar.remove()
            let regresar= document.createElement('div')
            let enlace = document.createElement('a')
            Input.insertAdjacentElement('afterend', regresar)
            Input.remove()
            enlace.textContent = 'Regresar'
            enlace.href = '/Proyectos/Sheklan12e/juego_random/index.html'
            regresar.appendChild(enlace)

        }

    })
    
    // condiciones
    



}


jugar_buton.addEventListener('click', function(){
    detalles();
    
})



// cambiar color 

function generador(){
    dato = '123456789ABCDEF';
    hex = '#';
    for (let i = 0; i<6; i++){
        let random = Math.floor(Math.random() * 10);
        hex += dato[random]
    }
    return hex
}

butons.addEventListener('click', () =>{
    let color_random = generador()

    document.body.style.backgroundColor = color_random

})