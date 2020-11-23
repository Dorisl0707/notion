$(document).ready(function(){
		var quoteSource=[
		{
			quote: "任何浪漫的最坏之处，就是置人于不浪漫的境地。",
			name:"奥斯卡·王尔德《道林·格雷的画像》"
	    },
		{
			quote: "在我荒脊的土地上，你是最后的玫瑰。",
			name:"巴勃罗·聂鲁达《二十首情诗与绝望的歌》"
	    },
	    {
	    	quote:"山不必陟乃佳也。",
	    	name:"归有光《归程小记》"
	    },
	    {
	    	quote:"靡不有初,鲜克有终。",
	    	name:"无名氏《诗经·大雅·荡》"
	    },
	    {
	    	quote:"拥有花朵的人不需要神祗。",
	    	name:"费尔南多·佩索阿《阿尔伯特·卡埃罗》"
	    },
	    
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'——								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready