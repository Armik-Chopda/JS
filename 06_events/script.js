// document.getElementById('images').addEventListener('click',(e)=>{
//     alert('element  clicked! inside the ul')
// },true)
// document.getElementById('owl').addEventListener('click',function(e){
//     alert('owl cliked!')
// },true)
// document.getElementById('google').addEventListener('click',function(e){
//     console.log('Google clickd')
//     e.stopPropagation()
//     e.preventDefault()
// })





// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,

document.getElementById('images').addEventListener('click',function(event){
    event.stopPropagation();
    event.preventDefault()
    if (event.target.tagName==='IMG','A') {
        const removeIt= event.target.parentNode
    removeIt.parentNode.removeChild(removeIt)
        
    }
    
    
   
})