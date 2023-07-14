//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
let  frase = prompt("Escribe ña frase")
let Letra = "a"
let   contador = 0
for (var i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === Letra.toLowerCase()){
        contador++
    }
}
document.write("La letra aparece ", contador)