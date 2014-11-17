$(document).ready(function(){
	var ww = $(window).width();
	if(ww > 600){
		var wh = $(window).height() - 100;
		$('.column').height(wh);
	}
});

$(window).resize(function(){
	var ww = $(window).width();
	console.log(ww);
	if(ww > 600){
		var wh = $(window).height() - 100;
		$('.column').height(wh);
		console.log('dfsdfsdf');
	}
});