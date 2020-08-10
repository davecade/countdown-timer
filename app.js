const inputDate = document.getElementById('target-date')
const button = document.querySelector('.start')
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
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    if(milliseconds < 0) {
        alert("Please enter a future date and time")
        return [0,0,0,0]
    }

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    return [days, hours, minutes, seconds]
}

function checkZero(number) {
    if (number < 10 && number >= 0) {
        return `0${number}`
    } else {
        return number;
    }
}

function restart() {
    clearInterval(start)
    counting = false;
    outputDays.innerHTML = '00'
    outputHours.innerHTML = '00'
    outputMins.innerHTML = '00'
    outputSeconds.innerHTML = '00'
    button.innerHTML = 'START'
}


button.addEventListener('click', () => {
    if (counting === false) {
        counting = true;
        button.innerHTML = 'STOP'
        let endDate = new Date(inputDate.value).getTime()
        start = setInterval(() => {
            let countdownValues = getTimeDifference(new Date().getTime(), endDate);
            let day = countdownValues[0]
            let hour = countdownValues[1]
            let min = countdownValues[2]
            let sec = countdownValues[3]

            outputDays.innerHTML = checkZero(day)
            outputHours.innerHTML = checkZero(hour)
            outputMins.innerHTML = checkZero(min)
            outputSeconds.innerHTML = checkZero(sec)
            if (day == '00' && hour == '00' && min == '00' && sec == '00') {
                restart()
            }
        }, 1000)
    } else restart();
})