$(function () {

    verificarcliquemenu();

    function verificarcliquemenu(){
        $('a').click(function(event){

            event.preventDefault();
            $('.container').html('');
            

            var href = $(this).attr('href');

            $.ajax({
                'beforeSend': function(){
                    console.log('Chamando beforeSend');
                },
                'timeout': 10000,
                'url':href,
                'error': function(){
                    console.log('Ocorreu um erro!');
                },
                'success': function(data){
                    //$('.container').html(data);
                    $(data).appendTo('.container').fadeIn();
                }
            })

        })
    }

});