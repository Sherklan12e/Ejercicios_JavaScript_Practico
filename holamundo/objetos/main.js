const juan = new Object();
juan.nombre = 'pedroo'
juan.color = 'red'


console.log(juan)
// classe
class persona{
    constructor(name , lastname){
        this.name = name;
        this.lastname = lastname;
    }
    saludar(){
        return this.name + ' ' + this.lastname
    }

}

const hector = new persona('davis', 'perz lujan');
const juans = new persona('juan erick', 'lujan carryon');
console.log(hector)
console.log(hector.saludar())
console.log(juans.saludar())

// Herencia

class Studiante extends persona{
    constructor(name, lastname ,carrera){
        super(name, lastname);
        this.carrera = carrera;
    }
    saludar(){
        return super.saludar() + 'your academy' + ' ' + this.carrera
    }

}


const maria = new Studiante('Maria', 'lopez mendez', 'bootriz');
console.log(maria.saludar())
console.log(maria.saludar())