	
	// 页面加载完成后执行函数
	
	$(document).ready(function() {

		
		var config = {
			authDomain: "danmu-fcc-chijiangbo.wilddog.com",
			syncURL: "https://danmu-fcc-chijiangbo.wilddogio.com" //输入节点 URL
			};
		wilddog.initializeApp(config);
		var ref = wilddog.sync().ref();
		var arr = [];
		ref.remove();
		$('.dm_screen').empty();
		
		$('.s_sub').click(function(){
			var text = $('.s_txt').val();
			// var textObj = $("<div class=\"dm_message\"></div>");
		 //    textObj.text(text);
		 //    $(".dm_screen").append(textObj);
		    ref.child('message').push(text);
		    $(".s_txt").val('');
		    // moveObj(textObj);
		});

		$('.s_txt').keypress(function(event){
			if (event.keyCode == "13") {
	      		$(".s_sub").trigger('click');
	    	}
		});

		$(".s_del").click(function(){
			ref.remove();
			arr = [];
			$('.dm_screen').empty();
		});
		// 把在本地完成的事放在了云上完成，比如加元素
		ref.child('message').on('child_added',function(snapshot) {
			var text = snapshot.val();
			// 表示回调的新增对象
			arr.push(text);
			var textObj = $("<div class=\"dm_message\"></div>");
		    textObj.text(text);
		    $(".dm_screen").append(textObj);
		    moveObj(textObj);
		});

		ref.on('child_removed',function(){
			arr = [];
			$('.dm_screen').empty();
		})
		var moveObj = function(val){
			var _left = $('.dm_screen').width() - val.width();
			// var _top = $('.dm_screen').offset().top + 30;
			val.css({
				// 这个地方是值对，值为数字，不带单位
		      "left": _left,
		      "top": getRandomTop(),
		      "color": getRandomColor()
		    });
		    var time = 7000;
		    // css3动画里面的
			val.animate({
			left:  "30px"
				}, time, function() {
			      val.remove();
			    });
		};
		
		var getRandomColor = function() {
			var color_num_1 = Math.floor(Math.random()*255)-20;
			var color_num_2 = Math.floor(Math.random()*255)-20;
			var color_num_3 = Math.floor(Math.random()*255)-20;
			return 'rgb(' + color_num_1 + ',' + color_num_2 + ',' + color_num_3 + ')' ;
		};

		var getRandomTop = function() {
			var screen_top = $('.dm_screen').offset().top;
			var _height = $('.dm_screen').height();
			var top_num = Math.floor(Math.random()*_height);
			var _top = screen_top + top_num;
			if(_top>(screen_top+_height-36)) {
				_top = screen_top+_height-36;
			}
			return _top;
		};
		var getAndRun = function() {
	    if (arr.length > 0) {
	      var n = Math.floor(Math.random() * arr.length + 1) - 1;
	      var textObj = $("<div>" + arr[n] + "</div>");
	      $(".dm_screen").append(textObj);
	      moveObj(textObj);
	    }

	    setTimeout(getAndRun, 6000);
	  };
	  jQuery.fx.interval = 50;
	  getAndRun();
	});

	// $(document).ready(function(){
	// 	ref.remove();
	// 	arr = [];
	// 	$('.dm_screen').empty();
	// });