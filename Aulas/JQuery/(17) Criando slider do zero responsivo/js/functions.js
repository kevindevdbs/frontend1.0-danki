$(document).ready(function() {
    let indiceAtual = 0; // Índice do slide atual
    const slides = $('.slide'); // Seleciona todos os slides
    const totalSlides = slides.length; // Total de slides
    let intervaloAutoSlide; // Variável para o intervalo de auto slide

    function mostrarSlide(indice) {
        if (indice >= totalSlides) {
            indiceAtual = 0; // Se o índice for maior que o total, volta ao primeiro slide
        } else if (indice < 0) {
            indiceAtual = totalSlides - 1; // Se o índice for negativo, vai para o último slide
        } else {
            indiceAtual = indice; // Atualiza o índice atual
        }
        
        // Fade out do slide atual e fade in do próximo slide
        slides.fadeOut(500).eq(indiceAtual).fadeIn(500);
    }

    function iniciarAutoSlide() {
        intervaloAutoSlide = setInterval(function() {
            mostrarSlide(indiceAtual + 1); // Mostra o próximo slide
        }, 3000); // Muda a cada 3 segundos
    }

    function pararAutoSlide() {
        clearInterval(intervaloAutoSlide); // Para a transição automática
    }

    $('.next').click(function() {
        pararAutoSlide(); // Para a transição automática ao clicar
        mostrarSlide(indiceAtual + 1); // Mostra o próximo slide
        iniciarAutoSlide(); // Reinicia a transição automática
    });

    $('.prev').click(function() {
        pararAutoSlide(); // Para a transição automática ao clicar
        mostrarSlide(indiceAtual - 1); // Mostra o slide anterior
        iniciarAutoSlide(); // Reinicia a transição automática
    });

    // Esconde todos os slides inicialmente e exibe o primeiro slide
    slides.hide(); // Esconde todos os slides
    mostrarSlide(indiceAtual); // Mostra o primeiro slide
    iniciarAutoSlide(); // Inicia a transição automática
});