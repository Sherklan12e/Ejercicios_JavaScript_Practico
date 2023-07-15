//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

var numero = parseInt(prompt("Escribe el numero "))

var primo = true 

if (numero <= 1){
    primo = false;
}else{
    for (var i = 2; i <numero ; i++){
        if (numero %i===0){
            primo=false
            break 
        }
    }
}

if (primo) {
    document.write(numero + "Es un numero Primo")
}else{
    document.write(numero +" No es un numero primo ")
}


