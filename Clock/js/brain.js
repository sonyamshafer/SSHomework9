//Make a digital clock
//It should show local time and tick every second, minute
//and hour. Bonus: make it show milliseconds!
//Style it to look awesome.

$(document).ready(function(){
	// alert("hi");
	
	function clock ( ) {
		var currentTime = new Date( );

		var currentHours = currentTime.getHours ( );
		var currentMinutes = currentTime.getMinutes ( );
		var currentSeconds = currentTime.getSeconds ( );
		var currentMilliseconds = currentTime.getMilliseconds( );
		
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
		currentMilliseconds = ( currentMilliseconds < 10 ? "0" : "" ) + currentMilliseconds;
		currentMilliseconds = ( currentMilliseconds < 100 ? "0" : "" ) + currentMilliseconds;
		currentMilliseconds = ( currentMilliseconds < 1000 ? "0" : "" ) + currentMilliseconds;

		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + currentMilliseconds;
		
		document.getElementById("clock").innerHTML = currentTimeString;
	}
	// setimeout look it up  setTimeout
	// setinterval look up


// Do something every second
      // window.setInterval("javascript function");
	setInterval(function() {
		clock()
	}, 1000);

	// var formatteddatestr = moment(d).format('hh:mm:ss');

	console.log(clock())
});