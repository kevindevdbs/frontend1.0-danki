// $(function (){
//     alert('Olá Mundo');})

// $(document).ready(function () {
//     alert('Olá Mundo');
// })

// $(window).on('load', function () {
//     alert('Olá Mundo');
// })

// alert($('p').html()); 




// $(function () {
//     $('.artigo1').css({
//     'font-size':'50px',
//     'color': 'red'
// });
// }



// & setTimeout(function () {
//     $('#teste').animate({
//         'font-size': '80px',
//         'color': 'blue',
//         'background-color': 'yellow'
//     }, 1000);
// }, 2000))


function teste() {

    $(function () {
        $('.artigo1').click(function () {
            $('.artigo2').slideToggle(100);
        });

        $('.artigo1').hover(function () {
            $('.artigo2').toggleClass('hover');
        });

        $('textarea').focus(function () {
            console.log('Entrou no textarea');
        });
        $('textarea').blur(function () {
            console.log('Saiu do textarea');
        })
    });
}

function ValidarFormulario() {


    $('select').change(function () {
        console.log('Mudou o select');
    })
}

teste();
ValidarFormulario();
