//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let pedirNumero = parseInt(prompt("Digite un Numero: "))
if (pedirNumero % 2 ===0 || pedirNumero % 3 ===0 || pedirNumero % 5 ===0 || pedirNumero %7 ===0){
    document.write("El número es divisible por 2, 3, 5 o 7")
}else{
    document.write("No es divisible ")
}
