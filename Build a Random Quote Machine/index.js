$(document).ready(function(){
	// alert("WEDE");
	var content = [{
		"texts" : "情不知所起，一往而深",
		"author" : "汤显祖"
	},{
		"texts" : "一样是明月，一样是隔山灯火，满天的星，只有人不见，梦似地挂起",
		"author" : "林徽因"
	},{
		"texts" : "有些事，只能一个人做。有些关，只能一个人过。有些路啊，只能一个人走。",
		"author" : "龙应台"
	},{
		"texts" : "静待一树花开，盼你叶落归来。",
		"author" : "安意如"
	},{
		"texts" : "友情再深，缘分尽了，就成陌路。",
		"author" : "三毛"
	}];

	$(".btn-3").click(function(){
		var content_length = content.length;
		// length 是属性，后面不加括号的
		var text_num = Math.floor(Math.random()*content_length);
		var all_color = getRandomColor();
		// 属性命名不能是关键字，刚开始用的text所以不行，再属性不加括号
		// var span_text = '\"';
		// span_text.css({"font-size":"40px","font-weight":"bolder"});
		// var end_text = span_text + content[text_num].texts;
		$("span").text(content[text_num].texts);
		// 直接调用是可以的
		
		$("body").css('backgroundColor',all_color);
		$(".con-text").css('color',all_color);
		$("button").css('backgroundColor',all_color);
	});

	var getRandomColor = function() {
			var color_num_1 = Math.floor(Math.random()*255)-20;
			var color_num_2 = Math.floor(Math.random()*255)-20;
			var color_num_3 = Math.floor(Math.random()*255)-20;
			return 'rgb(' + color_num_1 + ',' + color_num_2 + ',' + color_num_3 + ')' ;
		};
});