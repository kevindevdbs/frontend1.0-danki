$(function () {

    /*
        var frase = 'kevin@hotmail.com';
    
        var verifica = frase.match(/^(.*?)(@)(.*?)$/);
    
        if (verifica != null) {
            console.log('Encontramos algo');
            console.log(verifica[1]);
            console.log(verifica[2]);
            console.log(verifica[3]);
        }
        else {
            console.log('Não encontramos nada');
        }
    
        */

    verificarcliquefechar();
    abrirjanela();

    function abrirjanela() {
        $('.btn').click(function (e) {
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }


    function verificarcliquefechar() {
        var el = $('body,.closebtn');

        el.click(function () {
            $('.bg').fadeOut();
        })

        $('.form').click(function (e) {
            e.stopPropagation();
        })

    }

    $('form#form1').submit(function (e) {
        e.preventDefault();
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();

        //Contando a Quantidade De Espaços e os respectivos valores.
        var amount = nome.split(' ').length;
        var splitstr = nome.split(' ');

        if (amount < 2) {
            for (var i = 0; i < amount; i++) {

                if (!splitstr[i].match(/^[a-zA-Z]+$/)) {

                } else {
                    aplicarcampoinvalido($('input[name=nome]'));
                    return false;
                }
            }
        } else {
            aplicarcampoinvalido($('input[name=nome]'));
            alert('Digite Seu Nome Completo');
            return false;
        }
    })

    function aplicarcampoinvalido(el) {
        el.css({ 'border': '2px solid red' });
        el.data('invalido', 'true');
        el.val('Campo Invalido!');

    }

});