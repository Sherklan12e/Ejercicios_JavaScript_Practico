const butons = document.getElementById('cambiar-color-id');
const jugar_buton = document.getElementById('jugar');
const pregunta = document.querySelector('.pregunta')
const parrafo = document.querySelector('.imagen')
const butonNo = document.getElementById('No')


butonNo.addEventListener('click', function(){
    pregunta.textContent = 'Ok vete *se pone Trite*'
    
    parrafo.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("imgs/waifu2.png") no-repeat center center/cover`;
    
    jugar_buton.remove()
    let regresar= document.createElement('div')
    let enlace = document.createElement('a')
    regresar.classList.add('regresar')
    enlace.classList.add('link')
    butonNo.insertAdjacentElement('afterend', regresar)
    butonNo.remove()
    enlace.textContent = 'Regresar'
    enlace.href = '/Proyectos/Sheklan12e/juego_random/index.html'
    regresar.appendChild(enlace)
    details.innerHTML = 'Perdiste :c'
    
})
function random_Num(){
    return  Math.floor(Math.random(1) * 15);
}
function detalles(){
    let randomnum = random_Num()

    let details = document.createElement('p')
    pregunta.insertAdjacentElement('afterend', details)
    pregunta.remove()
    details.innerHTML = 'El juego trata de Adivinar el numero entre el 1 y el 20  \nTienes 5 Intentos '
    details.classList.add('pregunta')


    // Imput
    let Input = document.createElement('input')
    Input.type = 'number'
    Input.min = 0;
    Input.max = 15;
    Input.classList.add('writenumber')
    jugar_buton.insertAdjacentElement('afterend', Input)
    jugar_buton.remove()
    // crear nuevo botom

    let botonenviar = document.createElement('button')
    botonenviar.classList.add('eviar')
    botonenviar.textContent = 'Enviar'
    Input.insertAdjacentElement('afterend', botonenviar)

    console.log(randomnum)

    count = 2
    botonenviar.addEventListener('click', function(){
        
        console.log(count)
        
        if (Input.value == randomnum){
            details.textContent = 'Ganaste '
            Input.value = ''
            count ++;
            
            
            let regresar= document.createElement('div')
            let enlace = document.createElement('a')
            Input.insertAdjacentElement('afterend', regresar)
            enlace.classList.add('link')
            regresar.classList.add('regresar')
            enlace.textContent = 'Regresar'
            enlace.href = '/Proyectos/Sheklan12e/juego_random/index.html'
            regresar.appendChild(enlace)
            botonenviar.remove()
            Input.remove()

            setTimeout(function(){
                window.open('https://ar.pinterest.com/', '_blank');
            }, 2000)
        }
        else if (Input.value ==0){
            details.textContent = `Por favor escribe un numero del 1 al 15 `
            Input.value = ''
        }
        
        else if(Input.value > randomnum){
            details.innerHTML = `El numero es muy grande ctmr <br><br><br><br> intento numero <span class='a' > ${count} </span>`
            Input.value = ''
            count ++;
            
        } else if (Input.value < randomnum){
            
            details.innerHTML = `El numero es muy pequeño!! Vamo que puedes <br><br><br><br>
            intento numero <span class='a' > ${count} </span>`
            Input.value = ''
            count ++;
            
        }
        




        if (count==7){
            botonenviar.remove()
            let regresar= document.createElement('div')
            let enlace = document.createElement('a')
            regresar.classList.add('regresar')
            enlace.classList.add('link')
            Input.insertAdjacentElement('afterend', regresar)
            Input.remove()
            enlace.textContent = 'Regresar'
            enlace.href = '/Proyectos/Sheklan12e/juego_random/index.html'
            regresar.appendChild(enlace)
            details.innerHTML = 'Perdiste :c'

        }

    })
    
    // condiciones
    



}


jugar_buton.addEventListener('click', function(){
    detalles();
    butonNo.remove()
    
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