
class createUser{
    constructor(userName){
        this.userName=userName
    }
    printUser(){
        return this.userName
    }
    static createId(){
        return '0001'
    }
}
const user1=new createUser('Dhruv')
console.log(user1.printUser());
// console.log(user1.createId());// static method not accessible

class teacher extends createUser{
    constructor(userName,mail,password){
        super(userName)
        this.email=mail;
        this.password=password
    }
}
const teacher1=new teacher('Armik','dhsuhdis@mail.com','sknk')
console.log(teacher1.printUser());
// console.log(teacher1.createId());// static method not accessible

