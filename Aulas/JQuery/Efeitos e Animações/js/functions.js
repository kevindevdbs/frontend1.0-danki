$(function () {

    // $('.box1').fadeOut(2000, function () {

    //     $('.box2').fadeIn(3000);
    // });


    //$('.box1').click(function () {
    // $('.box2').slideToggle(1000);
    // });



/*
    var timer;
    var TimeOut = function () {
        $('.box2').animate({

            width: '500px',

        }, 2000);
    }

$('body').click(function () {

    alert('Animação cancelada!')
    clearTimeout(timer);

})

    $('.box1').animate({

        height: '200px',

    }, 3000, function () {
        timer = setTimeout(TimeOut, 2000);
    });
*/

var timer;

$('body').click(function () {

    clearInterval(timer);
    alert('intervalo cancelada!')
})

timer = setInterval(function () {
    //alert('Olá Mundo!')

},3000)


});