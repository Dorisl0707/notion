$(document).ready(function(){
		var quoteSource=[
		{
			quote: "任何浪漫的最坏之处，就是置人于不浪漫的境地。",
			name:"奥斯卡·王尔德《道林·格雷的画像》"
	    },
		{
			quote: "在我荒脊的土地上，你是最后的玫瑰。",
			name:"巴勃罗·聂鲁达《二十首情诗与绝望的歌·第八首》"
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
		{
	    	quote:"人类这一物种已老，可人始终还是幼稚。",
	    	name:"让-雅克·卢梭《论人类不平等的起源和基础》"
	    },
		{
	    	quote:"如果你问我，我是否快乐，我会说，我不快乐。",
	    	name:"费尔南多·佩索阿《不安之书》"
	    },
		{
	    	quote:"路旁的狗打了个长长的呵欠，我也学他的样子，因为羡慕的缘故。",
	    	name:"石川啄木《事物的味道，我尝得太早了》"
	    },
		{
	    	quote:"把发热的面颊 埋在柔软的积雪里一般，想那么恋爱一下看看。",
	    	name:"石川啄木《事物的味道，我尝得太早了》"
	    },
		{
	    	quote:"灵魂有无穷的自信，它反抗除它自己以外的任何教训。",
	    	name:"沃尔特·惠特曼《谨慎之歌》"
	    },
		{
	    	quote:"小时候觉得好玩，就用手去碰含羞草，看它缩起来。可是 从来没人认真想过，要过多久 它才能重新打开。",
	    	name:"蔡仁伟《封闭》（写给校园霸凌事件）"
	    },
		{
	    	quote:"我偏爱写诗的荒谬，胜过不写诗的荒谬。",
	    	name:"维斯瓦娃·辛波斯卡《种种可能》"
	    },
		{
	    	quote:"王冠的寿命比头长。",
	    	name:"维斯瓦娃·辛波斯卡《博物馆》"
	    },
		{
	    	quote:"人是生而自由的，但却无往不在枷锁之中。",
	    	name:"让-雅克·卢梭《社会契约论》"
	    },
		{
	    	quote:"眼睛看不见隐形眼镜，但隐形眼镜让眼睛什么都看见了。",
	    	name:"蔡任伟《爱与被爱》"
	    },
		{
	    	quote|:"我眼睛里带着爱情，就像是脑门上带着奴隶的印记。",
	    	name:"廖一梅《恋爱的犀牛》"
	    },
		{
	    	quote:"我喜欢你是寂静的，彷佛你消失了一样，你从远处聆听我，我的声音却无法触及你。",
	    	name:"巴勃罗·聂鲁达《二十首情诗与绝望的歌·第十五首》"
	    },
		{
	    	quote:"希言自然",
	    	name:"老子《道德经·二十三章》"
	    },
		{
	    	quote:"子曰：“巧言令色，鲜矣仁。",
	    	name:"孔子《论语·学而篇·第三章》"
	    },
		{
	    	quote:"人生百年有几，念良辰美景，休放虚过。",
	    	name:"元好问《双调·小圣乐》"
	    },
		{
	    	quote:"欲把相思说似谁，浅情人不知。",
	    	name:"晏几道《长相思》"
	    },
		{
	    	quote:"冬，终也，万物收藏也。",
	    	name:"吴澄《月令七十二候集解·立冬》"
	    },
		{
	    	quote:"人之所欲无穷，而物之可以足吾欲者有尽。",
	    	name:"苏轼《超然台记》"
	    },
		{
	    	quote:"凡所有相，皆是虚妄。若见诸相非相，即见如来。",
	    	name:"释加牟尼《金刚经·第五品·如理实见分》"
	    },
		{
	    	quote:"不是风动，不是幡动，仁者心动。",
	    	name:"释道宁《偈六十三首·其二》"
	    },
		{
	    	quote:"人从爱欲生忧，从忧生怖；若离于爱，何忧何怖？",
	    	name:"释加牟尼《佛说四十二章经·第三十二章·我空怖灭》"
	    },
		{
	    	quote:"声望会阻止我们看到事物的本来面目，让我们的判断力彻底麻木。",
	    	name:"古斯塔夫·勒庞《乌合之众》"
	    },
		{
	    	quote:"一定要爱着点什么，恰似草木对光阴的钟情。",
	    	name:"汪曾祺《人间草木》"
	    },
		{
	    	quote:"晚来天欲雪，能饮一杯无？",
	    	name:"白居易《问刘十九》"
	    },
		{
	    	quote:"裹盐迎得小狸奴，尽护山房万卷书。",
	    	name:"陆游《赠猫》"
	    },
		{
	    	quote:"溪柴火软蛮毡暖，我与狸奴不出门。",
	    	name:"陆游《十一月四日风雨大作（其一）》"
	    },
	 ]
		

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
