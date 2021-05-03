$(document).ready(function() {
	$('.overlay').css({opacity: 0.5});
	positionCenter($('.popup-order'));

	$(".order").click(function(){
		$(".popup-order, .overlay").fadeIn(300);
	});

	$('.popup-order > img , .overlay').click(function(){
		$(".popup-order").fadeOut(300);
		$(".overlay").fadeOut(300);
	});

	function positionCenter(elem) {
		elem.css({
			marginTop: '-' + elem.height() / 2 + 'px',
			marginLeft: '-' + elem.width() / 2 + 'px'
		});
	}
});