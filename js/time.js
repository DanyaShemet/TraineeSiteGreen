let sec = document.querySelector('.sec')
let min = document.querySelector('.min');
let hour = document.querySelector('.hours');
let day = document.querySelector('.days');
let second = sec.innerHTML;
let minutes = min.innerHTML;
let hours = hour.innerHTML;
let days = day.innerHTML;
window.onload = function () {
	t = setInterval(function(){
		second--;
		if (second == -1) {
			second = 59
			minutes--
		}if(second < 10){
			sec.innerHTML = "0" + second;	
		}else {
			sec.innerHTML = second;	
		}
		if (minutes == -1) {
			hours--;
			minutes = 59;	
		}
		if(minutes < 10){
			min.innerHTML = "0" + minutes;	
		}else {
			min.innerHTML =  minutes;
		}
    	if (hours < 10) {
    		hour.innerHTML = '0' + hours;
    	}else {
    		hour.innerHTML = hours;
    	}
    	if (hours == -1) {
    		days--;
    		hours = 23;
    	}
    	if (days < 10) {
    		day.innerHTML = '0' + days;
    	}else {
    		day.innerHTML = days;
    	}
	
	},1000)
}
