//Escribe un programa que pida una frase y escriba las vocales que aparecen
var  frase = prompt("Escriba la frase: ")
let vocales = ""
let letrasVocales = ["a","e","i","o","u"]

for (var i = 0; i < frase.length; i++){
    var letra = frase[i].toLowerCase()
    if (letrasVocales.includes(letra) && !vocales.includes(letra)){
        vocales= vocales+ letra + " "
    }
}


document.write("Las vocales de la frase son : " + vocales)