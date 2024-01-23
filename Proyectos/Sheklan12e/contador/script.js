const contador = document.getElementById('contador');
const texto = document.getElementById('numero')
count=0
contador.addEventListener('click', function(){
    count ++;
    texto.textContent = count
})