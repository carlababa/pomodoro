var countBreaks = 0;
function startTimer(duration, smallBreak, bigBreak, display) {
  var timer = duration, minutes, seconds;
  var cicles = 4 * duration;
  var interval = setInterval(function(){
    minutes = parseInt(timer / 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    cicles -= 1;

    if(--timer < 0) {
      if (timer < 0 && cicles < 0){
        timer = duration - duration;
      } else {
        timer = duration;
      }
    }

    if(cicles < -1) {
      if(countBreaks >= 4) {
        clearInterval(interval);
        countBreaks = 0;
        startBreak(bigBreak, display);
      } else {
        clearInterval(interval);
        startBreak(smallBreak, display);
      }
    }

  }, 1000);
}

function startBreak(duration, display) {
  var timer = duration, minutes, seconds;
  var interval = setInterval(function(){
    minutes = parseInt(timer / 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if(--timer < 0) {
        timer = duration - duration;
      clearInterval(interval);
      start();
    }
  }, 1000);
}

function stop(){
  location.reload();
}

function workingLoop(){
  var userInput = document.getElementById("inputId").value || 25;
  if(userInput < 1){
    userInput *= 100;
  } else {
    userInput *= 60;
  }
  return userInput;
}

function smallBreak() {
  var smallRest = document.getElementById("smallRest").value || 5;
  if(smallRest < 1){
    smallRest *= 100;
  } else {
    smallRest *= 60;
  }
  return smallRest;
}

function bigBreak() {
  var bigRest = document.getElementById("bigRest").value || 15;
  if(bigRest < 1){
    bigRest *= 100;
  } else {
    bigRest *= 60;
  }
  return bigRest;
}

function start(){
  countBreaks += 1;
  var display = document.querySelector("#counter");
  startTimer(workingLoop(), smallBreak(), bigBreak(), display);
}
