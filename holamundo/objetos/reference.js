let number = 4;
function h(){
    console.log('a')
}

const H = h;
console.log(H)
H();


function OrdernSuperio(fn){

    console.log('antes')

    fn()
    
    console.log('Despues')

}

OrdernSuperio(h)

function suma(a,b){
    return a+b
}

function orden(fn, a ,b){
    console.log('antes');
    const rest = fn(a,b);
    console.log(rest)
}
orden(suma, 3,2)


// inmutabilidad 
const numbers = [1,2,3,4,5];
const numbers2 = [1,2,3,4,5];

function nulMutable(collection, num){
    for(let i = 0; i< collection.length;i++){
        collection[i] *= num
    }
    return collection;
}
const newArray = nulMutable(numbers, 2)
console.log(newArray)


function inmutable(collection, nume){
    const newNumber = [];
    for(let item of collection){
        newNumber.push(item * nume)
    }
}