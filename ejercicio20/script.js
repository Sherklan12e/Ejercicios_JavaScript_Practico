let cadenas = []
var cadena

do {
    cadena = prompt("Ingrese la cadena de texto ('Presione 'cancelar' para salir ')")
    if (cadena !== null ){
        cadenas.push(cadena);
    }
}while (cadena !== null);
var resultado = cadenas.join("-")
document.write("Cadenas concatenadas: " + resultado)