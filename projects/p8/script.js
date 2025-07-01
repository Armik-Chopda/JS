
const lowercase=document.querySelector('.lowercase');
const capitalize1=document.querySelector('.capitalize');
const bold=document.querySelector('.bold');
const italic=document.querySelector('.italic');
const uppercase=document.querySelector('.uppercase');
const underline=document.querySelector('.underline');
const output=document.querySelector('#output-field');
const input=document.querySelector('#input-field');

uppercase.addEventListener('click',(e)=>{
    val=input.value

    output.textContent =`${val.toUpperCase()}`
   
})
lowercase.addEventListener('click',function(e){
    output.innerHTML=`${input.value.toLowerCase()}`
})

bold.addEventListener('click',function(e){
   
    if(output.innerHTML!='Output'){
        output.style.fontWeight = output.style.fontWeight === 'bold' ? 'normal' : 'bold';

    }
   
})

italic.addEventListener('click',function(e){
    if(output.innerHTML!='Output'){
        output.style.fontStyle=output.style.fontStyle==='italic'?'normal':'italic';
    }
})

underline.addEventListener('click',function(e){
    if(output.innerHTML!='Output'){
        output.style.textDecoration=output.style.textDecoration==='underline'?'none':'underline';
    }
})
capitalize1.addEventListener('click',function(e){
    output.innerHTML=`${input.value[0].toUpperCase()}${input.value.slice(1)}`
})

