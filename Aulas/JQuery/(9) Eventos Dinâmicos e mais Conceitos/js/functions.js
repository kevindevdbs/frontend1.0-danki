$(function () {
/*
var link = $('<a href="#">Link</a>').appendTo('body');
var div = $('<div></div>').appendTo('body').hide();

$('div').css({
    'background-color':'red',
    'width':'100px',
    'height':'100px'
});

link.on('click', function () {
   div.toggle();
   alert('Cliquei');
});
*/

var func = function () {
    $('input[type=text]').eq($(this).index()).css('background-color', 'red');
}

//$('input[type=text]').keyup(func)

$('input[type=text]').keydown(func);


});
a