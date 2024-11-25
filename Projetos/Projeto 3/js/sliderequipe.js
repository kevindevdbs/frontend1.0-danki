$(function () {

    var quantidade;
    var delay = 3000;
    curIndex = 0;

    initslider();
    autoplay();

    function initslider() {
        quantidade = $('.sobre-autor').length;
        var sizecontainer = 100 * quantidade;
        var sizeboxsingle = 100 / quantidade;
        $('.sobre-autor').css('width', sizeboxsingle + '%');
        $('.scroll-wrapper').css('width', sizecontainer + '%');
    }

    for (var i = 0; i < quantidade; i++) {
        if (i == 0) {
            $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
        }
        else {
            $('.slider-bullets').append('<span></span>');
        }
    }

    function autoplay() {
        setInterval(() => {
            curIndex++;
            if (curIndex == quantidade)
                curIndex = 0;
            goToSlider(curIndex);
        }, delay);
    }

    function goToSlider(curIndex) {
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'rgb(170,170,170)');
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;

        $('.scroll-equipe').stop().animate({'scrollLeft': offSetX});
    }

    $(window).resize(function () {
        $('.scroll-equipe').stop().animate({'scrollLeft': 0});
    })
})
