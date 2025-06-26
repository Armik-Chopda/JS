let key=document.querySelector('#insert')
window.addEventListener('keydown',function(e){
    console.log(e.code);
    key.innerHTML+=`
    <table>
  
  <tr>
    <td>${e.key===' '?'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
    
    `
    
})
