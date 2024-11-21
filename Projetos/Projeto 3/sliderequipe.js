$(function () {

    initslider();

    function initslider() {
    var quantidade = $('.sobre-autor').length;
    var sizecontainer = quantidade * 100;
    var sizeboxsingle = 100 / quantidade;
    $('.sobre-autor').css('width', sizeboxsingle + '%');
    $('.scroll-wrapper').css('width', sizecontainer + '%');
}
})
