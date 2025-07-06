const  faceBookUser=new Object()

faceBookUser.id='001';
faceBookUser.name='armik';
faceBookUser.age=19;
faceBookUser.isLoggedIn=true
// console.log(faceBookUser)

const newObject={                           // use mutipal key inside the key or function also
    email:'armik@gmail.com',
    id:'001',
    fullName:{
        userName:{
            fistName:'armik',
            lastName:'chopda',
            finalName:{
                finalName:[1,2]
            }
        }
    }
}
// console.log(newObject.fullName.userName.finalName.finalName);   //for access the element from the object


//marge tow object

const obj=Object.assign({},faceBookUser,newObject)
// console.log(obj);

// 2 method to marge tow Object

const obj2={...faceBookUser,...newObject}
// console.log(obj2);

users=[{id:'001',
    name:'armik'
},
{id:'001',
    name:'armik'
},
{id:'001',
    name:'armik'
},



]
// console.log(users[1].id);     // access object or elements from array of ojects

// console.log(Object.keys(faceBookUser));    //access keys of oject
// console.log(Object.values(faceBookUser));   //access values of object
// console.log(faceBookUser.hasOwnProperty('age'));  // check a object has this.. key or not


const obj3={
    name:'armik',
    email:'armik@gamil.com'
}
obj3.name    
//or
const {name}=obj3    //<-  d-stracture  object
const {name:n}=obj3
console.log(name);
console.log(n);




