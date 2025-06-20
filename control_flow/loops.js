for(let i=0;i<=10;i++){
   // console.log(i);
    
}
for(let i=0;i<=10;i++){
   // console.log(`outer loop value is ${i}`);
    for(let j=0;j<=10;j++){
       // console.log(`${i} X ${j} =${i*j}`);
        
    }
    
}

//break and continue
for (let i = 0; i < 20; i++) {
    const element = i;
    if(element==5){
        continue;
    }
    if(element==10){
        break;
    }

    //console.log(element)
    
}
let i=0
while ( i<=10) {

    console.log(i)
    i+=2
    
}
const myArray=['A','b','c','d']
let w=0
while(w<myArray.length){
    console.log(myArray[w]);
    w+=1
    
}
x=1
do {
    console.log(`value of x=${x}`);
    x+=1
    
} while (x<=10);
