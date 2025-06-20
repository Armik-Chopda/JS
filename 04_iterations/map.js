// map callback function
const arr=[1,2,3,4,5,6,7,8,9,10]
const newnum=arr.map((num)=>{
     return num+=10

}).map((i)=>{
    return i+10
}).filter((num)=>{
    if(num>25){
        return num
    }
})
// chainng .map().map().filter()
console.log(newnum);
