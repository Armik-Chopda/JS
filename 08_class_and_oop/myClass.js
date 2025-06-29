class User{
    constructor(userName,email,password){
        this.userName=userName;
        this.email=email;
        this.password=password
    }
    encryptPassWord(){
        return `${this.password}XYZ`
    }
    chengeUserName(){
       return this.userName.toUpperCase()
    }
}
const u1=new User('Atmikchopda','armik@gamil.com','AR13');
console.log(u1.encryptPassWord());
console.log(u1.chengeUserName());

