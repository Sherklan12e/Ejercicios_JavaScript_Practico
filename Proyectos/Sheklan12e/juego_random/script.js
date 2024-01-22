const butons = document.getElementById('cambiar-color-id');


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

butons.addEventListener('click', function() {
    console.log('a')
})