//En el siguiente ejercicio vamos a practicar con el bucle do while para que el código se ejecute una y otra vez hasta que el usuario decida parar

//Pide una nota (número). Muestra la calificación según la nota:

//0-3: Muy deficiente
//3-5: Insuficiente
//5-6: Suficiente
//6-7: Bien
//7-9: Notable
//9-10: Sobresaliente

do{
    let nota = parseInt(prompt("Ingrese su nota "))
    if (nota >=0 && nota <= 3){
        document.write("Calificacion: Muy deficiente")
    }else if (nota >3 && nota <=5){
        document.write("Calificacion: Insuficiente")
    } else if (nota >5 && nota <=6) {
        document.write("Calificacion: Suficiente")
    } else if (nota >6 && nota <=7) {
        document.write("Calificacion:  Bien")
    } else if (nota > 7 && nota <=9) {
        document.write("Calificacion: Notable")
    }else if (nota >9 && nota <= 10){
        document.write("Calificacion: Sobresaliente")
    }else{
        document.write("Algo salio mal. Intentalo Denuevo")
    }
    let opcion = prompt("Desea ingresar otra nota ? (S/N)").toLocaleUpperCase()



}while( opcion === "S");