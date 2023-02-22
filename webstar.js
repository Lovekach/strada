const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

const startStop = document.querySelector('.button');

startStop.addEventListener('click', () => {
    interval = setInterval(startTimer, 1);
})

startStop.addEventListener('click', () => {
    clearInterval(interval)
    
})

let hour = 00;
    minute = 00;
    second = 00;    
    interval

function startTimer() {
    second++;

    if (second <= 9) {
        secondElement.innerText = "0" + second;
    }
    if(second > 9) {
        secondElement.innerText = second;
    }
    if (second > 59 ) {
        minute++; 
        minuteElement.innerText = "0" + minute;
       second = 0
       secondElement.innerText = "0" + 0
    }
}
