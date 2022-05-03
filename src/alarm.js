const display = document.getElementById('clock');
const audio = new Audio('https://elements.envato.com/alarm-beeps-VZTN39G');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
function updateTime(){
    const date = new Date();


    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    const session = 'AM'


    display.innerText = `${hour} : ${minutes} : ${seconds}` + ` Hrs`;

    
};

function formatTime(time) {
    if(time < 10){
        return '0' + time;
        
    }
    return time;

    
}


//set-alarm
function setAlarmTime(value){
    alarmTime = value;
    console.log(alarmTime)
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play, timeout);
            alert('Alarm set');
        }
    }
}


// clear-alarm
function clearAlarm(){
    audio.pause();
    if(alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared')
    }
}



//update time every second
setInterval(updateTime, 1000);



