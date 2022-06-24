setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function startStopWatch() {
    var date = new Date ();   
    var startClockId = setInterval(() => {  
      date.setSeconds(date.getSeconds() + 1)
    }, 1000);
    let number = parseInt(document.getElementById("number").value);
    setTimeout(function () {
      clearInterval(startClockId);
    }, number * 1000);
    console.log(typeof(number));
    console.log(document.getElementById("number").value);
    console.log(number);
  }