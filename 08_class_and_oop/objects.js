function mutipalBy5(num){
    return num*5
}
mutipalBy5.power=2
console.log(mutipalBy5.power)
console.log(mutipalBy5(10))
console.log(mutipalBy5.prototype)

/////////////////////////////////////////////////
function createUsers(userName,score){
    this.userName=userName;
    this.score=score
}
// Adding method to the prototype to print the current score
createUsers.prototype.increment=function(){
    this.score++
}
// Adding method to the prototype to print the current score
createUsers.prototype.printMe=function(){
    console.log(`your score is${this.score}`)
}
const user1=new createUsers('Armikchopda',87)
const user2=new createUsers('dhruv',89)

user1.increment()
user2.increment()
console.log(user1,user2);

