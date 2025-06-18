const  faceBookUser=new Object()

faceBookUser.id='001';
faceBookUser.name='armik';
faceBookUser.age=19;
faceBookUser.isLoggedIn=true
console.log(faceBookUser)

const newObject={                           // use mutipal key inside the key or funcrions also
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
console.log(newObject.fullName.userName.finalName.finalName);//for access the element from the object


//marge tow object

const obj=Object.assign({},faceBookUser,newObject)
console.log(obj);

// 2 method to marge tow Object

const obj2={...faceBookUser,...newObject}
console.log(obj2);


