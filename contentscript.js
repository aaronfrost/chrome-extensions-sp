$(function(){
	var regex = /aaron frost/;
	var bodyText = $('body').text();
	if( regex.test(bodyText) ){
		alert('AQUI ESTA TU NOMBRE');
	}
});