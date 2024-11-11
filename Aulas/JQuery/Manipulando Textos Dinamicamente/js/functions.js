$(function () {
    
    // var html = $('.box');

    // html.html('<h1 class="texto1">Novo Conteúdo</h1>');
    // html.html(html.html() + '<h1 class="texto2">Novo Conteúdo</h1>');

    // var text = $('.box2');

    // text.text('Novo Conteúdo'); // Text , Pega Apenas o Texto não pega codigo html.

    $('input[type="button"]').click(function () {
    var v = $('input[type="text"]').val();
    //console.log(v);
    //Split separa nosso string com base no delimitador.
    //var var2 = v.split("@");
    //console.log (var2);

    //Substr recorta nossa string com base no indice.
    //console.log(v.substr(0,3));

    // var splitv = v.split("@");

    // if(splitv[1] == 'hotmail.com'){
    //     $('input[type="text"]').css('opacity', '0.5');
    // }else{
    //     console.log('Nao eh hotmail');
    // }
});

});