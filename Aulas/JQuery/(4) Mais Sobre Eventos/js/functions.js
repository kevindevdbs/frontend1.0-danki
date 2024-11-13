 $(function () {

//     var timer;


//     $(window).scroll(function () {
//         console.log("Scroll ativo")
//         //evento de quando o scroll ocorre
//     })

//     $(window).resize(function () {
//         console.log('A janela foi redimensionada');
//         evento de quando a janela é redimensionada
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//             location.href = 'localhost/Aulas/JQuery/Mais%20Sobre%20Eventos/index.html'

//         }, 1000)
//     })

//     $('a').click(function (e) {
//          e.preventDefault();
//          return false
//     })


$('.box').click(function (e) {

    e.stopPropagation();

})


$('body').click(function () {
    $('.box').css({
        'background-color': 'red'
    })
})
})