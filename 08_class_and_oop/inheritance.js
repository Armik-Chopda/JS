class Users{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
        console.log(`user name is${this.userName}`)
    }
}
class teacher extends Users{
    constructor(userName,email,password){
        super(userName)
        
        
        this.email=email;
        this.password=password
    }
    ABC(){
        return `${this.userName}XYZ`
    }
}
const u2=new Users('Armik');
const u1=new teacher('armik','a2dko@gdeid.com','uw2y7djhe');
console.log(u1.ABC())
