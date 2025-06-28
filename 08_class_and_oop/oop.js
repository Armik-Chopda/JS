const myObj={
    userName:'armik',
    email:'armik@gmail.com',
    isLoggedIn:true,
    getUserDateils:function(){
        console.log(this)
    }

}
// constructor
function users(userName,email,isLoggedIn){
    this.userName=userName;
    this.email=email;
    this.isLoggedIn=isLoggedIn

}
const funcOne=new users('Dhruv','dhruv32@gmail.com ',false)
const funcTwo=new users('Jeel','jeel2@gmail.com ',true)
console.log(this)//empty
console.log(funcOne.constructor)
console.log(funcTwo)