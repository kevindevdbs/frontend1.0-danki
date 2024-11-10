
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
