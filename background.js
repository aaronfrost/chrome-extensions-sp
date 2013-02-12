chrome.extension.onMessage.addListener(asimilarMensaje);

function asimilarMensaje(request, envio, enviarRequesta){
	switch(request.mensaje){

		case "nombre":
			var notificacion = webkitNotifications.createNotification(
				  'icon19.png',  			// url del icono - puede ser relativo
				  'ALERTA!!!!',  			// titulo de la notificacion
				  'Aqui aparecio tu nombre' // text de la notificacion
				);
			notificacion.show();
			break;
		default:
			break;

	}
}