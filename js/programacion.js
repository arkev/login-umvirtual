$(document).ready(function () {
	$('#username').focus();

	$('#submit').click(function () {

		event.preventDefault(); // evitar recargar página

		var ValidEmail = $('#username').val() === 'alumno'; // Usario valido
		var ValidPassword = $('#password').val() === 'e42lite2015'; // cantraseña valida

		if (ValidEmail === true && ValidPassword === true) { // si el usuario y la contraseña es valida
			$('.valid').css('display', 'block');
			window.location = "http://umvirtual.org"; // entonces ve a la web de UM Virtual
		} else {
			$('.error').css('display', 'block'); // muestra mensaje de error
		}
	});
	//Para cerrar las alertas
	$('#close').click(function () {
		$('.alerta').fadeOut('slow');
	});
	$('#calendario').click(function () {
		$('#fecha').css('display', 'none');
	});
	//Para cerrar el lightbox
	$('div#modal').on('click', '.cerrar', function (event) {
		event.preventDefault();
		$('div#modal').fadeOut('slow');
	});
});