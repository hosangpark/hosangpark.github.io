$(function(){
/////////
// $('선택).on('이벤트',할일)
// 일 => function 일() {}
// $(this) 나
// $(this).index() 번호
/*
function 팝업끄기(){
    console.log(
        $(this),
        $(this).index(),
        $(this).parent(),
        $(this).next(),
        $(this).prev(),
        $(this).children(),
        "아하"
    )
}
*/
function 팝업끄기(){
    $('.popup01').hide();
}
    $('.popup button').on('click', 팝업끄기);
})

////////////
