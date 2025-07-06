
//for Of loop
// syntax

// for (const element of object) {
    
// }

const arr=[1,2,3,4,5,6,7,8,9]
for (const i of arr) {
    console.log(i);
    
    
}


const str='armik chopda'
for(const i of str){
    console.log(i);
    
}

// MAP 
const map=new Map()
map.set('IN','INDIA')
map.set('US','United state')
map.set('Fr','France')
map.set('Sa','south Africa')
for(const [key,values] of map){
    console.log(`${key} :- ${values}`)
}
const myObj={     //for-of loop is not iterable for object
    name:'armik',
    age:19
}
// for(const [obj,values] of myObj){
//     console.log(obj,values);
    
// }
for (const key in myObj) {
   // console.log(key,myObj[key]);
 
}
//for in loop with array
for(const i in arr){
   // console.log(arr[i])
}

