var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var toggleMe = document.getElementById('toggle-me');
var toggled = false;

function hexClock() {
  var time = new Date();
  var hours = (toggled && time.getHours() > 12) ? (time.getHours() % 12).toString() : time.getHours().toString();
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
  if (!toggled) { // to civilian time
    toggled = true;
    toggleMe.textContent = "Show me Military Time!";
    return;
  }
  if (toggled) { // to military time
    toggled = false;
    toggleMe.textContent = "Show me Civilian Time!";
    return;
  }
}
timeChange();
hexClock(toggled);
setInterval(hexClock, 1000, toggled);
