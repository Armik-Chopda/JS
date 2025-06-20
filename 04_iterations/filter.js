const arr=[1,2,3,4,5,6,7,8,9,10]
//filter apply on conditions // callback function
const newarr=arr.filter((val)=>{
    return val>4
})
console.log(newarr);

//
const newArray=[]
const newVal=arr.forEach((item)=>{
    if(item>4){
        newArray.push(item)

    }

})
console.log((newArray));

const book = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
];
let userBook=book.filter((books)=>{
    return books.genre==='History'

})
userBook=book.filter((books)=>{
    return books.edition>=2007 && books.genre==='History'
})
console.log(userBook);

