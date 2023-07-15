//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let numero = parseInt(prompt("Escriba un numero: "))
let numero2 = parseInt(prompt("Escriba el otro numero: "))
document.write("Los divisores de los numeros son " + numero + "y " + numero2+ "son ")
for (var i = 1; i <= numero && i<= numero2; i++){
    if (numero%i===0 && numero2%i===0){
        document.write(i + " ")
    }
}