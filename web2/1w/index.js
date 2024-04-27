console.log("a")
let nombre = 'producto'
let precio =  49

let cantidadeseada = prompt("Cuanta cantidad desea ?")
let consto = precio * cantidadeseada
if (cantidadeseada > 5){
    consto = consto * 0.10
}

alert("el pagar a total es de " + consto +" Aplicando el descuento")