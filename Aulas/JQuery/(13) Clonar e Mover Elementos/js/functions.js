$(function () {

    var el = $('#source .texto').clone();
    $('#container').append(el);

    $('#source .texto').appendTo('#container');

});