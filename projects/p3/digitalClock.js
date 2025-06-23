const clock=document.querySelector('#clock')
const time=document.querySelector('#time')

setInterval(() => {
    let date = new Date();
    console.log();
    clock.innerHTML=date.toLocaleTimeString();
    const day = date.getDate(); // 1–31
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()]; // 0–11
    const year = date.getFullYear(); // 2025
    time.innerHTML=`${day} ${month} ${year}`
}, 1000);