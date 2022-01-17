document.addEventListener('DOMContentLoaded',()=>{
    const name = document.getElementById('name');
    const age = document.getElementById('age');

    name.onmousemove=()=>{
        name.classList.toggle('name');
    }

    
    const date  = new Date();
    const years  = date.getFullYear()-2004;
    const hour  = date.getHours();
    const minute  = date.getMinutes();
    const seconds  = date.getSeconds();
    const month  = date.getMonth();
    const day = date.getDate();

    if( month<4){
        age.innerHTML=`I´m ${years-1} years old`
    }else if( month>=4){
        if(day>=22){
            age.innerHTML=`I´m ${years} years old`
        }else{
            age.innerHTML=`I´m ${years-1} years old`
        }
    }

    
    

    // console.log(date);
    // console.log(month);
    // console.log(hour)
    // console.log(minute);
    // console.log(seconds);
    // console.log(years);
})