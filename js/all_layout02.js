$(function(){

    $('.mainSlide').slick({
    arrows:false, /* 슬라이드 좌우 버튼 */
    autoplay:true,
    autoplayspeed:1000,
    dots:true,
});


    $('.mainVisual .slideArrows i:first-child').on('click',function(){
        $('.mainSlide').slick('slickPrev')
    });
    $('.mainVisual .slideArrows i:last-child').on('click',function(){
        $('.mainSlide').slick('slickNext')
    });

});
