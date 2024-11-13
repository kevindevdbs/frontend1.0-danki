$(function () {
    // Este bloco de código é executado quando o DOM está totalmente carregado.

    $(window).scroll(function () {
        // Adiciona um evento de rolagem à janela. Este código será executado sempre que o usuário rolar a página.

        var height = $(this).height(); // Obtém a altura da janela de visualização (viewport).
        var offY = $(window).scrollTop(); // Obtém a posição atual do scroll vertical.

        $(".sessao").each(function () {
            // Itera sobre cada elemento com a classe "sessao".

            var elOffY = $(this).offset().top; // Obtém a posição vertical do elemento "sessao" em relação ao documento.

            // Verifica se o elemento "sessao" está visível na janela de visualização.
            if (elOffY < (offY + height) && elOffY + height > offY) {
                // Se o elemento estiver visível, remove a borda inferior de todos os links.
                $('a').css('border-bottom', 'none');
                
                var target = $(this).attr('target'); // Obtém o valor do atributo "target" do elemento "sessao".
                
                // Adiciona uma borda inferior a um link específico, baseado na classe que corresponde ao valor de "target".
                $('.'+ target ).css('border-bottom', '2px solid #444');
                return; // Sai do loop após encontrar o primeiro elemento visível.
            }
        })
    });
});