//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
let frase = prompt("Escribe una frase: ")
let contador = 0;
var vocales = ["a","e","i","o","u"]
for (var i = 0; i < frase.length; i++){
    var letra = frase[i].toLowerCase();
    if (vocales.includes(letra)){
        contador++;
    }
}


document.write("La cantidad que aparecen son: "+ contador)