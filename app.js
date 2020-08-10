const inputDate = document.getElementById('target-date')
const startButton = document.querySelector('.start')
const outputDays = document.querySelector('.day')
const outputHours = document.querySelector('.hour')
const outputMins = document.querySelector('.min')
const outputSeconds = document.querySelector('.sec')

let counting = false;
let start

const getTimeDifference = (start, end) => {
    let milliseconds = Math.floor(end - start);
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    hours = hours - (days*24);
    minutes = minutes - (days*24*60) - (hours*60);
    seconds = seconds - (days*24*60*60) - (hours*60*60) - (minutes*60);

    return [days, hours, minutes, seconds]
}

const checkZero = (number) => {
    if(number < 10 && number >= 0) {
        return `0${number}`
    } else {
        return number;
    }
}

startButton.addEventListener('click', () => {
    if(counting === false) {
        counting = true;
        let endDate = new Date(inputDate.value).getTime()
        start = setInterval(() => {
            let countdownValues = getTimeDifference(new Date().getTime(), endDate);
            outputDays.innerHTML = checkZero(countdownValues[0])
            outputHours.innerHTML = checkZero(countdownValues[1])
            outputMins.innerHTML = checkZero(countdownValues[2])
            outputSeconds.innerHTML = checkZero(countdownValues[3])
        }, 1000)
    } else {
        clearInterval(start)
        counting = false;
        outputDays.innerHTML = '00'
        outputHours.innerHTML = '00'
        outputMins.innerHTML = '00'
        outputSeconds.innerHTML = '00'
    }

})