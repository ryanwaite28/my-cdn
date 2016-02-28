$(document).ready(function(){
	
	var thCenter = $('.th-center');
	
	thCenter.css({
		'line-height': thCenter.parent('div').height() + 'px',
	});
	
	$(window).resize(function(){
		thCenter.css({
			'line-height': thCenter.parent('div').height() + 'px',
		});
	})
	
})