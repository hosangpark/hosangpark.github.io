$(function () {
    // topBanner:22.03.17 //  

    function topBannerHandler() {
        // $('.topBannner').hide(); //display:none;
        $('.topBanner').slideUp();
    }
    $('.topBanner .container i').on('click', topBannerHandler);


    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '    <div class="msLeft"></div>      ',
        nextArrow: '    <div class="msRight"></div>      '
    });


    // 슬라이드에 애니메이션...
    $('.visualSlide figure').eq(1).addClass('oo');
    $('.visualSlide').on('afterChange', function (e, s, c) {
        $('.visualSlide figure').eq(c + 1).addClass('oo').siblings().removeClass('oo');
        if (c === 1) {
            $('.msLeft').addClass('oo')
        } else {
            $('.msLeft').removeClass('oo')
        }
    });

    //

    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });


    $('.evenetProduct i:nth-of-type(1)').on('click', function () {
        $('.eProductSlide').slick('slickPause')
    });

    $('.evenetProduct i:nth-of-type(2)').on('click', function () {
        $('.eProductSlide').slick('slickPlay')
    });

    //

    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1000,
        focusOnSelect: true, /*이미지 선택시 해당이미지로 이동*/
    });

    $('.allProduct i:first-child').on('click', function () {
        $('.aproductSlide').slick('slickNext')
    });

    $('.allProduct i:last-child').on('click', function () {
        $('.aproductSlide').slick('slickPrev')
    });

    //ytplayer
    $("#bgndVideo").YTPlayer({
        videoURL: 'sqgxcCjD04s',
        containment: '.movieBg',
        autoPlay: true,
        mute: true,
        starAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('.movieBg i:first-child').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.movieBg i:last-child').on('click', function () {
        $("#bgndVideo").YTPPlay();
    });

    $('.tabMenu li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('oo').siblings().removeClass('oo');
        $('.tabContent>div').eq($(this).index()).addClass('oo').siblings().removeClass('oo');
    });


    $('.link select').on('change', function () {
        let linkSite = $(this).val();
        if (!linkSite) return;
        window.open(linkSite)
    });


    $('.popup01 button').on('click', function () {
        $(this).parent().hide();
    });



    //////////console.log('play')////////////////////////
})
