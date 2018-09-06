$(document).ready(function() {

	$('#email').on('focus', function(){
		$('#errorEmailEmpty').slideUp();
		$('#errorEmailFormat').slideUp();
		$('#errorEmailRestricted').slideUp();
	});
	$('#password').on('focus', function(){
		$('#errorPassEmpty').slideUp();
	});

	$('#formLogin').on('submit', function(e){
		e.preventDefault();
		var email = $('#email').val();
			password = $('#password').val();
			pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			validEmail = false,
			validPass = false,
			testEmail = 'mail@mail.com';
			testPass = '123';

		// Email Check
		if ( email == '' ) {
			$('#errorEmailEmpty').slideDown();
		} else {
			if ( pattern.test(email) ) {
				validEmail = true;
			} else {
				$('#errorEmailFormat').slideDown();
			}
		}

		// Password check
		if ( password == '' ) {
			$('#errorPassEmpty').slideDown();
		} else {
			validPass = true;
		}

		// Test email check
		if (validPass == true && validEmail == true) {
			if ( email != testEmail || password != testPass) {
				$('#errorEmailRestricted .notify').show();
				$('#errorEmailRestricted').slideDown();
			} else {
				$('#formLogin').unbind('submit');
				$('#formLogin').submit();
			}
		}
	})
});