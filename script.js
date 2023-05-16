function clock() {
  var date = new Date();
  var hr = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  let x;
  if (hr > 12) {
    x = "PM";
  } else {
    x = "AM";
  }
  hr = hr < 10 ? "0" + hr : hr;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("digitalclock").innerHTML =
    hr + ":" + m + ":" + s + "   " + "-" + x;
  setInterval(clock, 1000);
}
clock();
