$('.header-right > a').click(function() { //intercetto il click sul menu hamburger.

    $('.hamburger-menu').addClass('active'); //aggiungo la classe active al menu hamburger tale da renderlo visibile.

});

$('.close').click(function(){ //intercetto il click sull'icona di chiusura del menu.
    $('.hamburger-menu').removeClass('active'); //la cui conseguenza rimozione della classe active per renderlo di nuovo display:none.
});
