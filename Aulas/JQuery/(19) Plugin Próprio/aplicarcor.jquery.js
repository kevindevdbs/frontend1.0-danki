// Define um novo método jQuery chamado 'aplicarcor'
$.fn.aplicarcor = function(options) {

    // Mescla as configurações padrão com as opções fornecidas pelo usuário
    var settings = $.extend({
        color: 'red', // Cor do texto padrão
        backgroundColor: 'yellow' // Cor de fundo padrão
    }, options );

    // Aplica as cores especificadas aos elementos selecionados
    return this.css({
        color: settings.color, // Aplica a cor do texto
        backgroundColor: settings.backgroundColor // Aplica a cor de fundo
    });
}