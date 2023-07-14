const numero = prompt("Un numero :")
const otroNumero = prompt("Otro numero: ")
if (parseInt(numero)  < parseInt(otroNumero)){
    document.write(" El numero mayor es : ", parseInt(otroNumero))
}else if (parseInt(otroNumero) < parseInt(numero)) {
    document.write("El numero mayor es : " , parseInt(numero))
}else{
    document.write("Los dos son iguales")
}
