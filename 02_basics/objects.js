let mysym=  Symbol('key')
const myObject={
    name:'armik',
    [mysym]:'key001',
    email:'armik@gmail.com',
    age:19,
    isLoggeIn:false,
    lastLoggeIn:['monday','saturday']

}
myObject.name='dhruv' //value overhide

Object.freeze(myObject)//freeze object ,you cant any chenge after freeze

// console.log(myObject.lastLoggeIn)
// console.log(myObject['name']);
// console.log(myObject[mysym]);// if you use symbol , compulsory use []

const myObject2={
    name:'armik',
    [mysym]:'key001',
    email:'armik@gmail.com',
    age:19,
    isLoggeIn:false,
    lastLoggeIn:['monday','saturday']

}
myObject2.greeting=function(){
    console.log('hello armik')
}
myObject2.greeting2=function(){
    console.log( `hello ${this.email}`)
}
console.log(myObject2.greeting2())

