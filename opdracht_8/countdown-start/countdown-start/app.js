const countDate = new Date(1688774400000);
const now = new Date(1676376941000);
const gap = countDate - now;

const second = 1000;
const minute = second*60;
const hour = minute*60
const day = hour*24;

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

document.querySelector(".day").innerText = textDay;
document.querySelector(".hour").innerText = textHour;
document.querySelector(".minute").innerText = textMinute;
document.querySelector(".second").innerText = textSecond;


let c = now.getTime()
console.log(c);