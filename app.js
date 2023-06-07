// Viraj Potdar
$('document').ready(function(){
    $('.op').hide()
    $('.close').hide()
    $('.menu').click(function(){
        $('.op').fadeIn("slow")
        $(this).hide("slow")
        $('.close').fadeIn("slow")
    })
    $('.close').click(function(){
        $('.op').hide()
        $(this).hide("slow")
        $('.menu').fadeIn("slow")
    })
})