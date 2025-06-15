const str= String('armik')
function reverseSring(armik){
    
    let x=armik.split('')
    x.reverse()
    console.log(x.join(''))
    return x.join('')
           //OR //
    // console.log(String(x).replaceAll(',',''));
}


function vovel(ar){
    
    let a=ar.toLocaleLowerCase()
    let x=a.split('')
    console.log(x)
    let b=0
    for(i=0;i<=x.length;i++){
        if(x[i]=='a' || x[i]=='e' || x[i]=='i' || x[i]=='o' || x[i]=='u'){
            b++
            
            }
    
    }
        console.log(` number of vovel is ${b} `)
}
vovel("armik")
function palindrome(){
    let armik1='armik'
    
   
    if(reverseSring(armik1)==armik1){
        console.log( `A Number is palindrome`)
    }
    else{
        console.log(`number is no a palindrome number`)
    }
 
}
palindrome()
