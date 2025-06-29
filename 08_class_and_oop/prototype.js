const myArray=['superman','thor','DS']

const myObj={
    userName:'armik',
    id:10,
    getUserName:function(){
        console.log(`your username id ${this.userName}`)
    }

}
Object.prototype.armik=function(value){
    return value+' hello'
}
console.log(myObj.armik(myObj.userName))

/////////////////////////////////////////////////////////////////////////////
// inheritance
const A={
    id:10
};
const B={
    userName:'armik',
    __proto__:A

}
const C={
    age:19,
    
    __proto__:B
    
}
Object.setPrototypeOf(B,A)//morden syntex
console.log(B.id);
console.log(C.id);
console.log(C.userName);

// insert prototype in String
String.prototype.trueLangth=function(){
    console.log(this);
    console.log(this.trim().length);
    
    
}
console.log('arm'.trueLangth())
