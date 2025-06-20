// for-Each loop 
const myArray=['python','java','react','node','mongoDb','css','Html']
myArray.forEach((item)=>{ //callBack function
    // console.log(item);
    
})

function print(i){
    // console.log(i);
    
}
myArray.forEach(print)//print is function referance 
myArray.forEach((item,index,myArray)=>{
   // console.log(item,index,myArray);
    
})
//forEach loop in array with more than one objects
const School=[
    {name:'armik',age:19,std:12},
    {name:'jeel',age:10,std:5},
    {name:'dhruv',age:12,std:7},
    {name:'ankit',age:16,std:11},
]
School.forEach((profile)=>{
    console.log(profile['name'],profile['age'],profile.std);
    

})