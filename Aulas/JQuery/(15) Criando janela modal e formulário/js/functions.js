$(function () {

    //Funções de Abrir e fechar formulário


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




    //Eventos do Formulário


    $('form#form1').submit(function () {
        resetarcapominvalido($(this));
    })
    


    $('form#form1').submit(function (e) {
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email]').val();
        var telefone = $('input[name=telefone]').val();

        if (verificarnome(nome) == false) {
            aplicarcampoinvalido($('input[name=nome]'));
            return false;

        } else if (verificaremail(email) == false) {
            aplicarcampoinvalido($('input[name=email]'));
            return false;

        } else if (verificartelefone(telefone) == false) {
            aplicarcampoinvalido($('input[name=telefone]'));
            return false;
        }


        else {
            resetarcapominvalido($(this));
            alert('Formulário enviado com Sucesso!')
        }
    }

    )





    //Funções para  Estlizar o campo do Formulário


    function aplicarcampoinvalido(el) {
        el.css({
            'border': '2px solid red',
            'color': 'red'
        });
       alert('Campo Invalido!');
        //el.data('invalido','true')
    };

    function resetarcapominvalido(el) {
        el.css({
            'border': '1px solid #ccc',
            'color': 'black'
        });
        el.val('');
    }



    //Funções de Verificação de Campos


    function verificarnome(nome) {
        if (nome == '') {
            return false;
        }
        var amount = nome.split(' ').length;
        var splitstr = nome.split(' ');
        if (amount >= 2) {
            for (var i = 0; i < amount; i++) {
                if (splitstr[i].match(/^[A-Z]{1}[a-z]{1,}$/)) {

                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    function verificaremail(email) {

        if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null) {
            return false;
        }
    }

    function verificartelefone(telefone) {
        if (telefone == '' || telefone.length < 10) {
            return false;
        }

        if (telefone.match(/^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/) == null) {
            return false;
        }
    }


});

