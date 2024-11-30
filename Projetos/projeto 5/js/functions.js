$ (function() {
    var currentvalue = 0;
    var isdrag = false;
    var precomaximo = 70000;

    $('.pointer-barra').mousedown(function() {
        isdrag = true;
    });

    $(document).mouseup(function() {
        isdrag = false;
        enabletextselection();
    });

    $('.barra-preco').mousemove(function(e) {
        if (isdrag) {
            disabletextselection();
            var elbase = $(this);
            var mouseX = e.pageX - $(this).offset().left;

            if (mouseX < 0) {
                mouseX = 0;
            }

            if (mouseX > elbase.width()) {
                mouseX = elbase.width();
            }

            $('.pointer-barra').css({
                'left': mouseX - 10
            });

            var porcentagem = (mouseX / elbase.width()) * 100;
            $('.barra-preco-fill').width(porcentagem + '%');

            currentvalue = (mouseX / elbase.width()) * precomaximo;
            $('.valor-pesquisa p').eq(0).text('R$' + currentvalue.toFixed(2).replace('.', ','));
            $('.valor-pesquisa p').eq(1).text('R$' + precomaximo.toFixed(2).replace('.', ','));
        }
    });

    function disabletextselection() {
        $('body').css('-moz-user-select', 'none');
        $('body').css('-webkit-user-select', 'none');
        $('body').css('-ms-user-select', 'none');
        $('body').css('-o-user-select', 'none');
        $('body').css('user-select', 'none');
    }

    function enabletextselection() {
        $('body').css('-moz-user-select', 'auto');
        $('body').css('-webkit-user-select', 'auto');
        $('body').css('-ms-user-select', 'auto');
        $('body').css('-o-user-select', 'auto');
        $('body').css('user-select', 'auto');
    }

    /*
     mini img wraper = style="background-color:rgb(210,210,210);" 
     foto destaque = style="background-image:url('imagens/carro1.jpg');" 
     */

     var imgshow = 3;
     var maxindex = Math.ceil($('.mini-img-wraper').length/3)-1;
     var curindex = 0;

     initslider();
     navegateslider();

     function initslider() {
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper')
        elScroll.css('width',amt+'%')
        elSingle.css('width',33.3*(100/amt)+'%')
     }

     function navegateslider (){
        $('.arrow-right-nav').click(function(){
            if(curindex < maxindex){
                curindex++;
                var elOff = $('.mini-img-wraper').eq(curindex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }
            else{
                console.log ('Chegamos até o final')
            }
        })
     }
})