/*
PARA LA ANIMACIÓN DE SALTO DE UNA SECCIÓN A OTRA.
El enlace debe ser del tipo href="#ancla" y tener la clase "jquery-pag":

	<a href="#inicio" class="jquery-pag">Inicio</a>

Y el destino debe tener id="ancla":

	<section id="inicio">
*/

$(function(){

	$('a[href*="#"].jquery-pag').click(function() {
	
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		
			var $target = $(this.hash);
			
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			
			if ($target.length) {
			
				var targetOffset = $target.offset().top;
				
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				
				return false;
		
			}
		
		}
	
	});
	
});

