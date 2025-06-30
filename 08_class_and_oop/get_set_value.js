//getter and setter
class user{
    constructor(id,userName,email,passWord){
        this.id=id;
        this.userName=userName;
        this.email=email;
        this.passWord=passWord;

    }
    get userName(){
        return this._userName.toUpperCase();
    }
    set userName(value){
        this._userName=value
    }
}
const u1=new user(1,'armik','armikchopda@gmail.com','Armiikcnirxz')
console.log(u1.userName);

