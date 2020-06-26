const INTERVAL_DELAY =1000;
const SHOW_REAL_TIME = false;
const RADIUS = 360;

const SECONDS_IN_MIN = 60;
const SECONDS_IN_HOUR = 60* SECONDS_IN_MIN;
const SECONDS_IN_12_HOUR = 12* SECONDS_IN_HOUR ;

let time =0;
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');
const tick =()=>
{
    console.log('tick', time);
    if(SHOW_REAL_TIME)
    {
        let now = new Date();
        time =0;
        time += now.getSeconds();
        time += now.getMinutes()*SECONDS_IN_MIN;
        time += now.getHours()*SECONDS_IN_12_HOUR;
        
    }else{
        time = time% SECONDS_IN_HOUR;
        time++;
    }
    rotateClock();
}

const rotateClock =()=>{
    second.style.transform ='rotate('+ calcSeconds()+'deg)' ;
    minute.style.transform = 'rotate('+ calcMinutes()+'deg)' ;
    hour.style.transform = 'rotate('+ calcHour()+'deg)' ;
}

const calcSeconds=()=>{
    let percentage = (time%SECONDS_IN_MIN)/SECONDS_IN_MIN;
    return Math.round(percentage * RADIUS);
}
const calcMinutes =()=>
{
    let percentage = (time%SECONDS_IN_HOUR)/SECONDS_IN_HOUR;
    return Math.round(percentage * RADIUS);
}

const calcHour=()=>{
    let percentage = (time%SECONDS_IN_12_HOUR)/SECONDS_IN_12_HOUR;
    return Math.round(percentage * RADIUS);
}


document.addEventListener('DOMContentLoaded',() =>{
    setInterval(tick,INTERVAL_DELAY);
})