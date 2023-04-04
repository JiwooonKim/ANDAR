$(function(){
    /*
     *  스크롤 발생시, header 스타일 변경
    */
    let lastScroll = 0;
    $(window).scroll(function(){
        const usrScroll = $(this).scrollTop();

        if ( usrScroll > 0 ) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }

        if ( usrScroll > lastScroll ) {
            $('.quick').addClass('hide');
        } else {
            $('.quick').removeClass('hide');
        }
        lastScroll = usrScroll;
    });
    //강제로 스크롤 이벤트
    $(window).trigger('scroll');    

    /**
     *  검색 버튼 클릭 시, 검색 화면 나오기
    */
    $('.header .btn.search').click(function(){
        $('.popup-search').addClass('on');
    });
    $('.popup-search .btn-close').click(function(){
        $(this).parent('.popup-search').removeClass('on');
    });

    
    /**
     *  사이드바 버튼 클릭 시 나오기 
     */
    $('.header .btn.nav').click(function(){
        $('.side-nav').addClass('on');
        $('.dimmed').fadeIn();
        $('body').addClass('scroll-remove');
    });

    $('.side-nav .btn-close, .dimmed').click(function(){
        $('.side-nav').removeClass('on');
        $('.dimmed').fadeOut();
        $('body').removeClass('scroll-remove');
    });

    /**
     * 사이드 바 gnb 메뉴 클릭 시, 내가 선택한 gnb의 서브메뉴 나오기
     * @thisSubBox : 내가 선택한 gnb 메뉴의 서브 메뉴
     * @blindText : 내가 선택한 gnb 메뉴의 숨김처리 되있는 텍스트
     */
    $('.side-nav .gnb-box').click(function(e){
        const thisSubBox = $(this).siblings('.sub-box');

        //서브메뉴가 있을 때
        if ( thisSubBox.length > 0 ) {  
            e.preventDefault();
            thisSubBox.slideToggle();
            $(this).toggleClass('on');

            if ( $(this).hasClass('on') ) {
                $(this).children('.open').attr('aria-label','닫기');
            } else {
                $(this).children('.open').attr('aria-label','펼치기');
            }
        }
    })

    /**
     * 헤더 드롭다운 메뉴
     */
    $('#btnGnb').click(function(){
        const headerGnb = $('.header .group-gnb');

        $('.header .all-area').stop().slideToggle();
        headerGnb.toggleClass('on');

        if ( headerGnb.hasClass('on') ) {
            $('#btnGnb').attr('aria-label','닫기');
        } else {
            $('#btnGnb').attr('aria-label','펼치기');
        }
    });

    // 위로 이동 버튼
    $('.quick .btn-top').click(function(){
        $('html,body').animate({scrollTop:0});
    })

    // 스와이퍼
    var swiper = new Swiper(".top-banner", {
        effect: "fade",
        fadeEffect: { 
            crossFade: true 
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true
    });

    var swiper = new Swiper(".visual-slide", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
            el: ".pagination",
        },
    });

    var swiper = new Swiper(".gallery-slide", {
        slidesPerView: 2.2,
        spaceBetween: 10
    });
})
