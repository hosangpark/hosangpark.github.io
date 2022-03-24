var swiper = new Swiper(".firstcontainer", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

var swiper = new Swiper(".secondcontainer", {
    effect: "fade",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

var swiper = new Swiper(".thirdcontainer", {
    effect: "slide",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

$('.slide01').on('hover', function () {
    $('.slide01').Swiper('SwiperNext')
});
$('.slide01').hover(
    function () {
        $('.slide01').hide();
    },
    function () {
        $('.footerWap').show();
    }
)