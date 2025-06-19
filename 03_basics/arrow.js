const obj={
    name:'armik',
    age:19,
    wellcome:function(){
        console.log(`${this.name}, wellcome`);
        
    }
}
console.log(obj.wellcome())

function this1(){
    // console.log(this);
    
}
this1()

const newFunc=()=>{
    console.log(this);// in arroe function this keyword return {} empty object
    
}
newFunc()

const Func=(n1,n2)=>{
    return n1+n2

}
console.log(Func(10,28));



//IIFE
(function chai(name){
    console.log(name+'hello');  //()() one for rap function and one for execution
    
})('armik');
