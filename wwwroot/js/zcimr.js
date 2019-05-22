$(document).ready(function() {
    		$(".yb_conct").hover(function() { // 右侧悬浮窗口
					$(".yb_conct").css("right", "5px");
					$(".yb_bar .yb_ercode").css('height', '200px');
				}, function() {
					$(".yb_conct").css("right", "-130px");
					$(".yb_bar .yb_ercode").css('height', '53px');
				});
				$(".yb_top").click(function() { //返回顶部
					$("html,body").animate({
						'scrollTop': '0px'
					}, 1000)
				}); 
        $('body').scrollspy({ target: '#navbar-side' })   
    	})   