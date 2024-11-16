$(document).ready(function() {


    //plugin social media

    $("#social-share").jsSocials({
        shares: ["email", "twitter", "facebook", "linkedin", "whatsapp"]
    })


    //pluguin mask

    $('input[name="telefone"]').mask('(00) 00000-0000');
    $('input[name="data"]').mask('00/00/0000');


});