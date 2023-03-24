const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const ampm = document.getElementsByClassName("ampm");

function updateclock() {
  let date = new Date();

  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();

  if (h > 12) {
    h = h - 12;
    ampm.innerText = "PM";
  } else if (h === 0) {
    h = 12;
  }

  if (h < 10) {
    h = "0" + h;
  }

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = "AM";

  setTimeout(() => {
    updateclock();
  }, 1);
}

updateclock();
