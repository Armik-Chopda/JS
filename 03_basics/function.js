function addNumber(...num){

return num
}

// console.log(addNumber(1,2,3,4,5))// pass more than one element in one perameters

const myObject={
    id:'001',
    name:'armik',
    email:'armikchopda@gmail.com'
}
                                  // pass object as perameter in function
function passObject(anyObject){
    return anyObject.name
}
console.log(passObject(myObject))


const myArray=[10,20,47,67,45]  // pass array as perameters
function passArray(anyArray){
    return anyArray
}
console.log(passArray(myArray));
