const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve()
        console.log('Async Task is compelete')
    },1200)
})
promiseOne.then(function(){
    console.log('Promise Consumed');
    
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task two');
        resolve()
        
    },1000)
}).then(function(){
    console.log('promise two consumed');
    
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////

new Promise(function(resolve,reject){
    
   setTimeout(() => {
     resolve({'Username':'armik','Email':'armikchopda34@gmail.com'})
    
   }, 1200);
}).then(function(user){
    console.log(user);
    
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const promiseFour=new Promise(function(resolve,reject){
    let error=false
    if(!error){
       setTimeout(() => {
     resolve({'Username':'armik','Email':'armikchopda34@gmail.com'})
    
   }, 1200);
    }
    else{
        reject('Error found!')
    }
})
promiseFour.then((user)=>{
    console.log(user);

    return user.Email
}).then((emial)=>{
    console.log(emial);
    

}).catch((error)=>{
    console.log(error);
    

}).finally(()=>console.log('finally block'))
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const promiseFive=new Promise(function(resolve,reject){
    let err=false
    if (!err){
        setTimeout(() => {
            resolve({'Username':'Js','Email':'jav34@gmail.com'})
            
    
   }, 1200); }
   else{
    reject('ERROR!:js promise error')
   }
})
async function consumePromiseFive() {
    try {
        const value=await promiseFive
        console.log(value);
        
    } catch (error) {
        console.log(error);
        
        
    }
    
    
    
}
consumePromiseFive()
///////////////////////////////////////////////////////////////////////////////////////////////////////////
async function getData() {
    try {
           let response=await fetch('https://api.github.com/users/Armik-Chopda')
   let data=await response.json()
   console.log(data.login);
        
    } catch (error) {
        console.log("E:",error);
        
        
    }
   
}
getData()
///////////////////////////////////////////////////////////////////////////////////////////////////////////
fetch('https://api.github.com/users/Armik-Chopda')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
    

}).catch((error)=>{
    console.log(error);
    

}).finally(()=>{
    console.log('your work is either panding or not');
    
})