var audio = new Audio("beep49.mp3");
var countBreaks = 0;
var interval;
var duration = 0;
var wasBreak = false;

function startClock(_duration) {
  if(_duration) {
    duration = _duration;
  }
  setClock(duration);

  interval = setInterval(function(){
    setClock(duration);
    if(duration <= 0) {
      clearInterval(interval);
      audio.play();
      loadNextLoop();
    }
    duration --;
  }, 1000);
}

function setClock(duration) {
  var display = document.querySelector("#counter");
  var minutes = parseInt(duration / 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var seconds = parseInt(duration % 60, 10);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = minutes + ":" + seconds;
}

function loadNextLoop() {
  if(wasBreak) {
    startClock(loopTime("workLoop"));
  } else {
    if(countBreaks >= 4){
      countBreaks = 0;
      startClock(loopTime("bigRest"));
    } else {
      countBreaks += 1;
      startClock(loopTime("smallRest"));
    }
  }
  wasBreak = !wasBreak;
}

function loopTime(type){
  var defaultTime = {workLoop: 25, smallRest: 5, bigRest: 15}
  var userInput = document.getElementById(type).value || defaultTime[type];
  if(userInput < 1){
    userInput *= 100;
  } else {
    userInput *= 60;
  }
  return userInput;
}

function pause(){
  clearTimeout(interval);
}

function resume(){
  startClock();
}

function stop(){
  clearTimeout(interval);
  wasBreak = false;
  countBreaks = 0;
  setClock(0);
}

function start(){
  startClock(loopTime("workLoop"));
}
