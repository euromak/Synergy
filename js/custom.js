//создание модального окна
//открытие окна по кнопке
$(document).ready(function() {

	function toggleVisibility(){
	$('.modal, .overlay').toggleClass('show');
	}

	$('#openModal').click(function() {
	toggleVisibility();

	});

	$('.close, #closeModal').click(function() {
	toggleVisibility();
	});

	$('#toggle-btn').click(function() {
		$(this).toggleClass('toggleRight');
		$('.toggle-text').html('УЧАСТИЕ ONLINE');
	});

});
