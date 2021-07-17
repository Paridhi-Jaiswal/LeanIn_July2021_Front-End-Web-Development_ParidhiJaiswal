const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hrDiv = document.getElementById('hr');

setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    let sec = date.getSeconds() /60;
    let min = (date.getMinutes() + sec) / 60;
    let hr = (date.getHours() + min) / 12;

secDiv.style.transform = "rotate(" + (sec * 360) +"deg)";
minDiv.style.transform = "rotate(" + (min * 360) +"deg)";
hrDiv.style.transform = "rotate(" + (hr* 360) +"deg)";
}
updateClock();