
function moveon(){
    var 번호 = $(this).index();
    $('.tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent>div').removeClass('active');
    $('.tabContent>div').eq(번호).addClass('active');
//  $('.tabContent>div').eq(번호).addClass('active').sibling().removeClass('active');
}


$('.tabLink li').on('click', moveon);

$('.xi-close').on('click', function(){
    $('.headerWrap').slideUp();
})

// console.log($(this), $(this).index()) 