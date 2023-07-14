//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const numero1 = parseInt(prompt("Escribe el primer numero: "))
const numero2 = parseInt(prompt("Escribe el segundo numero: "))
const numero3 = parseInt(prompt("Escribe el tercer numero: "))

mayor = numero1
if (numero2 > mayor){
    mayor = numero2
}else if (numero3 > mayor) {
    mayor = numero3
}
document.write("El numero mayor es ",mayor)