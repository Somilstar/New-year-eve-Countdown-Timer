const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const newYears  = " 1 Jan 2025";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60)%60;
    const seconds  = Math.floor(totalSeconds)%60;

    daysEl.innerHTML = formattime(days);
    hoursEl.innerHTML = formattime(hours);
    minutesEl.innerHTML = formattime(minutes);
    secondsEl.innerHTML = formattime(seconds);
    if (totalSeconds <= 0) {
        
        stopCountdown();
    }
 

}
function formattime(time){
  return time<10 ? `0${time}` : time;
}
countdown();  
    
countdownInterval = setInterval(countdown, 1000);

