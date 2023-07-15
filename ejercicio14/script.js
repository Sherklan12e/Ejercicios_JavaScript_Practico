//Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible) 2, 3, 5 o 7
let numero = parseInt(prompt("Digite su numero: "))
if (numero %2===0){
    document.write(numero + " Es divisible por 2  ");
}
if (numero % 3 ===0){
    document.write(numero +" Es divisible por 3  ");
}
if  (numero %5===0){
    document.write(numero + " Es divisible por 5  " );
}
if (numero %7===0){
    document.write(numero + " Es divisible por 7  ")
}
if (numero %2!==0 && numero %3 !==0 && numero %5!==0 && numero %7!==0) {
    document.write(numero + " No es divisible por estos numeros : 2, 3, 5, o el 7")
}
