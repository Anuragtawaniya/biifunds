$(document).ready(function() {
    // gsap.fromTo(
    //     ".our-story-dta", 
    //     { opacity: 0, scale: 0 },
    //     { opacity: 1, scale: 1, duration: 1, ease: "power1.out" }
    // );
    gsap.from(".our-story-red", { opacity: 0, y: -490, duration: 1, ease: "power1.out" });
    gsap.from(".our-story-blue", { opacity: 0, x: 490, duration: 1, ease: "power1.out" });
    gsap.from(".our-story-green", { opacity: 0, y: 460, duration: 1, ease: "power1.out" });
    
    
    ourstorySlider = new Swiper(".ourstorySlider", {
    //     effect: 'fade', // Enable fade effect
    //     fadeEffect: {
    //     crossFade: true
    //   },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false, // Disable free mode for fade effect
    speed: 1200,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
        navigation: {
            nextEl: '#js-next1',
            prevEl: '#js-prev1',
        },
        grabCursor: false,
        touchRatio: 0.5,
        slideToClickedSlide: false,
    });

    
    
})