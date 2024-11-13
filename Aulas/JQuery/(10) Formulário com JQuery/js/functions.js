$(function () {

    $('form').submit(function (e) {

        e.preventDefault();

        var Nome = $('input[name="nome"]').val();
        var Email = $('input[name="email"]').val();
        var Telefone = $('input[name="telefone"]').val();
        var container = $('.container');

        var content = `
            <p>Nome: ${Nome}</p>
            <hr>
            <p>Email: ${Email}</p>
            <hr>
            <p>Telefone: ${Telefone}</p>
        `;

        container.html(content);
    });
});