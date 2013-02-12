$(function(){
	var regex = /aaron frost/;
	var bodyText = $('body').text();
	if( regex.test(bodyText) ){
		//alert('AQUI ESTA TU NOMBRE');
		//NO QUIERO HACER ALERT. QUIERO UN DESKTOP NOTIFICATION MEJOR
		chrome.extension.sendMessage({'mensaje':'nombre'}, function(respuesta){
			console.log('requesta de la notificacion: ',requesta);
		});
	}
});