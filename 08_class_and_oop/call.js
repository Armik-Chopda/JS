function setUserName(userName){
    this.userName=userName
}
function createUser(userName,email,password){
    setUserName.call(this,userName)
    this.email=email
    this.password=password

}
const user1=new createUser('armik','armik2@sd.com','2w')
console.log(user1)