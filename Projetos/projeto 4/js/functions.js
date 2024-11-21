$(function () {

    abrirmenu();
    scrollmenu();

    function abrirmenu(){

        $('nav.menu-mobile , menu-desktop').on('click', function () {
            $(this).find('ul').slideToggle();
        });
    }

    $(function scrollmenu () {
    
    // Função para fazer scroll suave para as seções
    $('nav a').on('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        
        var target = $(this).attr('href'); // Obtém o valor do atributo href do link
        
        // Calcula a posição do scroll para centralizar a seção na tela
        var targetOffset = $(target).offset().top;
        var windowHeight = $(window).height();
        var sectionHeight = $(target).outerHeight();
        var scrollTo = targetOffset - (windowHeight / 2) + (sectionHeight / 2);
        
        // Faz scroll suave até a seção correspondente
        $('html, body').animate({
            scrollTop: scrollTo
        }, 1000); // Duração do scroll em milissegundos
    });
});

});



