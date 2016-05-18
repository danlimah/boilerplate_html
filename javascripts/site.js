/* 
Programacao: Daniel Lima
Contato: daniel@zimpbox.com
www.zimpbox.com
*/

// Chamada para funcionar Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Chamada para funcionar Popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

// Animação com toogleClass
$( ".seletor" ).hover(function() {
  $( this ).toggleClass( "animated fadeInUp" );
});

// Animações de entrada
$( ".carousel-caption h1" ).addClass( "animated fadeInRight" );
$( ".carousel-caption p" ).addClass( "animated fadeInRight" );


function AjustaSite() {
    // Sticky Footer
	var alturafooter = $( ".footer" ).height();  // Descobrindo a altura do elemento.
	$( ".body" ).css( "margin-bottom", alturafooter + 90 );
}



$( document ).ready(function() {
    AjustaSite();
});



$( window ).resize(function() {
    AjustaSite();
});


// Fixar Menu no Topo ao rolar mouse. Usar a função.height();
var alturaheader = $( ".header" ).height();  // Descobrindo a altura do elemento.
var alturanavbar = $( ".navbar" ).height();  // Descobrindo a altura do elemento.
