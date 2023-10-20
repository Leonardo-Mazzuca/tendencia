const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerView: 'auto', 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});