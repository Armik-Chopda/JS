const btn=document.querySelectorAll('.button')
const body=document.querySelector('body')
btn.forEach((btn)=>{
    btn.addEventListener('mouseenter',(e)=>{
        if(e.target.id=='Red'){
    
            body.style.backgroundColor='bisque'
        }
        else if(e.target.id=='Black'){
            body.style.backgroundColor='brown'

        }
        else if(e.target.id=='Blue'){
            body.style.backgroundColor='cadetblue'

        }
        else if(e.target.id=='White'){
            body.style.backgroundColor='white'

        }
        
        
        //7.47->91

    });
    

});

