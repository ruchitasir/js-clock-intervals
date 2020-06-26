let secondId = document.getElementById("second");
let minuteId = document.getElementById("minute");
let hourId = document.getElementById("hour");
const RADIUS = 360;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_12_HOUR = 12* MINUTES_IN_HOUR ;

//var sec= setInterval(createRealClock,1000); //for the realclock to start

// Actual Real Clock
function createRealClock()
{
    var now = new Date();
    let secDateCnt = now.getSeconds();
    let minDateCnt = now.getMinutes();
    let hourDateCnt = (now.getHours()%12);
    secondRotation(secDateCnt);
    minuteRotation(minDateCnt);  
    hourRotation(hourDateCnt);
    console.log('hours now',hourDateCnt);
    console.log('min now',minDateCnt);
    console.log('sec now',secDateCnt);
}
//----------------------------------------------------------------
function secondRotation(cnt)
{ const DEG_PER_SECOND = RADIUS/60;
  let  deg = cnt * DEG_PER_SECOND;
  secondId.style.transform = "rotate(" + deg + "deg)";
  return deg;
}

function minuteRotation(cnt)
{ const DEG_PER_MINUTE = RADIUS/MINUTES_IN_HOUR;
  let  deg = cnt * DEG_PER_MINUTE;
  minuteId.style.transform = "rotate(" + deg + "deg)";
  return deg;
}

function hourRotation(cnt)
{ const DEG_PER_HOUR = RADIUS/MINUTES_IN_12_HOUR;  
 // In one minute, hour counter moves 1/2 degree so we have to add it into the degrees
 // cnt is in hours, converting to minutes
 cntInMins = cnt * MINUTES_IN_HOUR;
 let  deg = cntInMins * DEG_PER_HOUR; 
  hourId.style.transform = "rotate(" + deg + "deg)";
  return deg;
}
//----------------------------------------------------------------
//  Running Clock without real Date
let count=0,minCnt =0,hour =0;
const SEC_MIN_VALUE = 59; 
const HOUR_VALUE =12;

var sec = setInterval(seconds,1); // for the non real clock to start
function seconds()
{  if(count<SEC_MIN_VALUE)
    {count++;
    }
    else{
      count =0;
    minutes();
    
    }
    secondRotation(count);
}

function minutes()
{
  if(minCnt<SEC_MIN_VALUE)
   {
     minCnt++;
   }
   else{
     minCnt=0;
     hr();
   }
   console.log(hour);
   minuteRotation(minCnt);
   hourRotation(hour);
}

function hr()
{
   if(hour<HOUR_VALUE)
      {
         hour++;
      }
      else{
        hour =0;
    } 
}


 
