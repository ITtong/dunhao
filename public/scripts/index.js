console.log('index主页');


var swiper = new Swiper('.swiper-container', {
        initialSlide:2,
        loop:true,
        speed:1000,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
