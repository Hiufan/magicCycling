jQuery(function($){
	var height = $('#chatMainPanel').height();
	setTimeout(function(){
		$('.chatListColumn').each(function(){
			var name = $(this).find('.nickName').find('.name').text();
			if(name === '碰撞与革新') {
				$(this).click();
		    }
		});
		$('#messagePanelTitle').text('BIKETO美骑网——碰撞与革新');
		$('#rightOpBtn').hide();
		$('#chat_leftpanel,#vernierContainer,.footer,.panelBackground').hide();
		$('body').css({'background':'url(https://raw.githubusercontent.com/Hiufan/magicCycling/master/background.jpg)'});
		$('#chat_leftpanel').after('<div class="myAdd" style="position: relative;float: left;width: 276px;border-radius: 6px;z-index: 99;border: 1px solid #424448;box-shadow: 0 2px 6px #313131;background:url(https://raw.githubusercontent.com/Hiufan/magicCycling/master/sidebar.png);"></div>');
		$('.myAdd').height(height);
		$('.chatPanel .chatMainPanel').css({'float':'right','position':'static'});
		$('.chatPanel .chatTitle').css({'background':'rgb(229,0,0)','border':'none'});
	},1000);
});