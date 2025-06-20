// map method 
const myArray=[1,2,3,4,5,6]
const newVal=myArray.reduce((acc,carVall)=>{
    console.log(`acc=${acc} and current=${carVall}`)
    return acc+carVall
},0)//<-0 is first  initialValue
newVal2=myArray.reduce((acc,curVal1)=>acc+curVal1,0)
console.log(newVal);
console.log(newVal2);

const shopingCart=[
    {
        itemName:'shart',
        price:999,
        size:'L'
    },
     {
        itemName:'shart for man',
        price:1099,
        size:'M'
    }, {
        itemName:' black shart',
        price:999,
        size:'S'
    },
     {
        itemName:'t-shart',
        price:789,
        size:'XXL'
    }
    , {
        itemName:'simpal shart',
        price:1199,
        size:'XL'
    }

]

      
const myCart=shopingCart.reduce((acc,currVall)=>{
    //console.log(acc,currVall)
    
    
        cart=acc+currVall.price
        return cart


    
    
} ,0)





console.log(cart)




