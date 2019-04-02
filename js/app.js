var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var toggleMe = document.getElementById('toggle-me');
var civilianMode = false;

function hexClock() {
  var time = new Date();
  var hours;
  if (civilianMode && time.getHours() > 12)
    hours = (time.getHours() % 12).toString()
  else if (civilianMode && time.getHours() < 1)
    hours = (time.getHours() + 12).toString()
  else
    hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  var clockStr = hours + " : " + minutes + " . " + seconds;
  var colorStr = "#" + hours + minutes + seconds;

  clock.textContent = clockStr;
  hexColor.textContent = colorStr;

  document.body.style.background = colorStr;
}

function timeChange() {
  if (!civilianMode) { // to civilian time
    civilianMode = true;
    toggleMe.textContent = "Show me Military Time!";
    return;
  }
  if (civilianMode) { // to military time
    civilianMode = false;
    toggleMe.textContent = "Show me Civilian Time!";
    return;
  }
}
timeChange();
hexClock(civilianMode);
setInterval(hexClock, 1000, civilianMode);
