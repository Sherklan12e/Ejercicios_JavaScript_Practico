//Escribir un programa que escriba en pantalla los divisores de un número dado

var numero = parseInt(prompt("Escribe el numero: "))
document.write("Los divisores de " + numero + " Son: " )

for (var i = 0; i<= numero; i++){
    if (numero % i ==0){
        document.write(i+" ")
    }
}
