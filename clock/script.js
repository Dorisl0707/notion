function initClock(){
	var now = new Date();
	dateArray = [now.getHours(),now.getMinutes(),now.getSeconds()]

	dateArray.forEach(function(number, i){

		if (String(number).length == 1){
			var output = '0' + String(number);
		} else {
			var output = String(number);
		}

		$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(1) .showing').html(output[0])	
		$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(2) .showing').html(output[1])	

	})
}

function newTime(){
	
	var now = new Date();
	dateArray = [now.getHours(),now.getMinutes(),now.getSeconds()]
	
	dateArray.forEach(function(number, i){

		if (String(number).length == 1){
			var output = '0' + String(number);
		} else {
			var output = String(number);
		}
		
		var digitOne = $('.clock > span:nth-child('+(i+1)+') .digit:nth-child(1) .showing').html();	
		if (digitOne != output[0]){
			$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(1) .below').html(output[0]);
			$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(1) .showing').removeClass('showing').addClass('above');
			
			setTimeout(function(){
				$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(1) .below').removeClass('below').addClass('showing');
			},400)
				
			setTimeout(function(){
				$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(1) .above').removeClass('above').addClass('below');
			},600)
		}

		var digitTwo = $('.clock > span:nth-child('+(i+1)+') .digit:nth-child(2) .showing').html();	
		if (digitTwo != output[1]){
			$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(2) .below').html(output[1]);
			$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(2) .showing').removeClass('showing').addClass('above');
			
			setTimeout(function(){
				$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(2) .below').removeClass('below').addClass('showing');
			},400)
				
			setTimeout(function(){
				$('.clock > span:nth-child('+(i+1)+') .digit:nth-child(2) .above').removeClass('above').addClass('below');
			},600)
		}
		
	})
	
	
}

initClock()
setInterval(newTime, 1000);