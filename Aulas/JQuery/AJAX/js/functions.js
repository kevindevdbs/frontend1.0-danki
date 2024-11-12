$(function () {

    $.ajax({
        'url':'conteudo.html',
        //'method':'post',
        //data:{'nome':'Kevin', 'Idade':'21'},
    }).done(function (data) {
        $('#container').append(data);
    });

});