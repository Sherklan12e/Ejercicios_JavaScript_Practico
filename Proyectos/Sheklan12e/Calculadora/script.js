const botones = document.querySelectorAll('.boton');
const input = document.getElementById('entrada');
const eliminar = document.getElementById('delete')
const calcular = document.getElementById('queal')


botones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        let valor = boton.textContent;
        input.value += valor;
    });
});

eliminar.addEventListener('click', function(){
    input.value = ''
})
calcular.addEventListener('click', function(){
    let valor = eval(input.value)
    input.value = `${valor}`
    console.log(valor)
})
