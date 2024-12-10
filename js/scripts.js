$(function() {
    $('nav.mobile').click(function() {
        var listaMenu = $('nav.mobile ul');
        var icone = $('.botao-menu-mobile').find('i');

        // Alterna a visibilidade do menu
        listaMenu.slideToggle();

        // Alterna entre os ícones
        icone.toggleClass('fa-bars fa-times');
    });
});