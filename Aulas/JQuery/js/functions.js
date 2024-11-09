// $(function (){
//     alert('Olá Mundo');})




// $(document).ready(function () {
//     alert('Olá Mundo');
// })



// $(window).on('load', function () {
//     alert('Olá Mundo');
// })

alert($('p').html()); 

$(function () {
    $('.artigo1').css({
    'font-size':'50px',
    'color': 'red'
});
}



& setTimeout(function () {
    $('#teste').animate({
        'font-size': '80px',
        'color': 'blue',
        'background-color': 'yellow'
    }, 1000);
}, 2000))
