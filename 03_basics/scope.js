if(true){
    let a=10     //  { } <- thisis scope
    const b=20
    var c=30
}
// console.log(c)//Variables declared with **var** are function-scoped, not block-scoped. 
// console.log(a)//not accessible outside
function one(){
    const name='armik'
    function two(){
        const email='armikchopda@gmail.com'
        // console.log(name); this is accessible
    }
    two()
    //console.log(email); this is not accessible outside the { }<-scope 

}
one()


if(true){
    const userName='Armik'
    
    if(userName==='Armik'){
        const webSite='google'
        // console.log(userName+webSite);
        
    }
    
    // console.log(webSite);// this is not accessible
    
}
// console.log(userName);// this is not accessible


addOne(3)
function addOne(num){
    return num+1
}


// addTwo(3)// if you store function into variable-> Cannot access 'addTwo' before initialization

const addTwo=function (num){
    return num+2
}
addTwo(3)




