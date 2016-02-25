$(document).ready(function() {

	var pixel = $('#pixel');

	for (var i = 0; i < 2500; i++) {
		$('#inner').append('<div id="pixel"></div>');
	};

	$("#pixel").hover(function() {
		$(this).addClass('entering');
	});
	
});