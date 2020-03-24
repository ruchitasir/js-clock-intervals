let secondId = document.getElementById("second");
let minuteId = document.getElementById("minute");
let hourId = document.getElementById("hour");

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
    hourRotation(hourDateCnt,minDateCnt);
    console.log('hours now',hourDateCnt);
    console.log('min now',minDateCnt);
    console.log('sec now',secDateCnt);
}
//----------------------------------------------------------------
function secondRotation(cnt)
{ const DEG_PER_SECOND = 6;
  let  deg = cnt * DEG_PER_SECOND;
  secondId.style.transform = "rotate(" + deg + "deg)";
  return deg;
}

function minuteRotation(cnt)
{ const DEG_PER_MINUTE = 6;
  let  deg = cnt * DEG_PER_MINUTE;
  minuteId.style.transform = "rotate(" + deg + "deg)";
  return deg;
}

function hourRotation(cnt, minCt)
{ const DEG_PER_HOUR = 30;  
 // In one minute, hour counter moves 1/2 degree so we have to add it into the degrees
  let  deg = cnt * DEG_PER_HOUR + minCt * (1/2) ; 
  hourId.style.transform = "rotate(" + deg + "deg)";
  return deg;
}
//----------------------------------------------------------------
//  Running Clock without real Date
let count=0,minCnt =0,hour =0;
const SEC_MIN_VALUE = 60; 
const HOUR_VALUE =12;

var sec = setInterval(seconds,1000); // for the non real clock to start
function seconds()
{  if(count<SEC_MIN_VALUE)
    {count++;
    }
    else{
    minutes();
    count =0;
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
   minuteRotation(minCnt);
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
    hourRotation(hour,minCnt);
}


 
