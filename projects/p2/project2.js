const form=document.querySelector('button')
form.addEventListener('click',(e)=>{
    e.preventDefault()
    const h=parseInt(document.querySelector('#height').value)
    const w=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const yourArea=document.querySelector('#yourArea')
    if(h==='' || h<=0 || isNaN(h)){
        result.innerHTML='Please enter valid Height '
    }
    else if(w==='' || w<=0 || isNaN(w)){
        result.innerHTML='Please enter valid Weight '
    }
    else{
        const BMI=(w/((h*h)/10000)).toFixed(2)
        result.innerHTML=`<span>Your Bmi is:<b> ${BMI}</b></span>`
        if(BMI<=18.6){
            yourArea.style.color='red'
            
            yourArea.innerHTML=`<span> Your are <b>Under Weight</b></span>`
        }
        else if(BMI>18.6 || BMI<=24.9){
             yourArea.style.color='green'
            yourArea.innerHTML=`<span> Your are in <b>Normal Range</b></span>`

        }
        else if(BMI>24.6){
             yourArea.style.color='red'
            yourArea.innerHTML=`<span> Your are <b>Overweight</b></span>`

        }
        
        
    }
  
    
})


    
    
    
