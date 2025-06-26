//genrate random color
function randomCOlor(){
     const hex='0123456789ABCDEF'
     let color='#'
     for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]

     }
     
     
     return color
}
let time
const start =document.querySelector('#Start')
const stops =document.querySelector('#Stops')
const chengeColor=function(){
        document.body.style.backgroundColor=randomCOlor()
    }

const st=start.addEventListener('click',function(){
    
    if(!time){
        time=setInterval(chengeColor,1000)
    }
    
})
stops.addEventListener('click',function(e){
        clearInterval(time)
        time=null

})


