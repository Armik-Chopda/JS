let dates=new Date()
console.log(dates.toDateString());
console.log(dates.toISOString())
console.log(dates.toLocaleDateString());


let myCustumDate= new Date(2027,10,14)
console.log(myCustumDate.toDateString());

let timeStamp= Date.now()
console.log(timeStamp);
console.log(myCustumDate.getTime());




let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(Math.round(Date.now()/1000))



