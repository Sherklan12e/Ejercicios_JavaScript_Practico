const boton = document.getElementById('cambiar-color')


function generador(){
  datos = '123456789ABCDEF'
  palabra = '#'
  for (let i =0; i<6; i++){
    random = Math.floor(Math.random() * 10 );
    palabra += datos[random]

  }
  return palabra
}

boton.addEventListener( 'click' , function(){
  let colores = generador()
  document.body.style.backgroundColor = colores
})