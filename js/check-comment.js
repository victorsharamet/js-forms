$(document).ready(function() {

	$('#commentTextarea').on('focus', function(){
		$('#errorEmpty').slideUp();
	});
	$('#commentForm').on('submit', function(e){
		e.preventDefault();
		var commentText = $('#commentTextarea').val();
		// console.log("Значение commentText = '" + commentText + "'");


		if ( commentText == '' ) {
			console.log('Пусто');
			$('#errorEmpty').slideDown();
		} else {
			console.log('Комментарий есть');
			$('#commentForm').unbind('submit');
			$('#commentForm').submit();
		}


	});


});