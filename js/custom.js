new WOW().init();
// var currentAudio = null;


$(document).ready(function() {

   $(window).on("scroll", () => {
  if ($(window).scrollTop() >= 60) {
    $('nav').addClass("fixed");
  } else {
    $('nav').removeClass("fixed");
  }
});

  setTimeout(function () {
		$('#enquirepopmain').modal('show');
		$('.bodyoverlaybgcons').addClass('inabout');
},0);

$('.fancybox-closess').click(function(){
    $('.bodyoverlaybgcons').removeClass('inabout');
})
    
     if ($('.slider-thumbnail').length > 0 && $('.podcastslider').length > 0) {
        var sliderThumbnail = new Swiper('.slider-thumbnail', {
            slidesPerView: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            breakpoints: {
    320: {
      spaceBetween: 5,
    },
    1024: {
      spaceBetween: 40,
    }
  }
        });

        var podcastslider = new Swiper('.podcastslider', {
            effect: "fade",
            autoplay: {
                delay: 5000,
            },
            thumbs: {
                swiper: sliderThumbnail
            },
        });

        function handleVideoPlayback() {
            var activeVideo;

            function playCurrentVideo() {
                var currentVideoSlide = podcastslider.slides[podcastslider.activeIndex];
                var currentVideo = $(currentVideoSlide).find('video')[0];
                var currentThumbnailSlide = $(".slider-thumbnail .swiper-slide-thumb-active");
                var currentSVG = currentThumbnailSlide.find('.progress-circle circle')[0];

                if (currentVideo) {
                    if (activeVideo && activeVideo !== currentVideo) {
                        activeVideo.pause();
                        activeVideo.currentTime = 0;
                    }

                    currentVideo.play();
                    activeVideo = currentVideo;

                    $(currentSVG).animate({
                        'strokeDashoffset': '0px',
                        'opacity': 1
                    }, 5000);
                }
            }

            playCurrentVideo();

            podcastslider.on('slideChange', function () {
                $(".slider-thumbnail .swiper-slide").find('.progress-circle circle').css('strokeDashoffset', '314px');
                playCurrentVideo();
            });
        }

        handleVideoPlayback();
    }


// var sliderThumbnail = new Swiper('.slider-thumbnail', {
//     slidesPerView: 3,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//     spaceBetween: 40,
    
// });
// var podcastslider = new Swiper('.podcastslider', {
//     effect: "fade",
//     autoplay: {
//         delay: 5000,
//     },
//     thumbs: {
//         swiper: sliderThumbnail
//     },
// });

// function handleVideoPlayback() {
//     var activeVideo;

//     function playCurrentVideo() {
//         var currentVideoSlide = podcastslider.slides[podcastslider.activeIndex];
//         var currentVideo = $(currentVideoSlide).find('video')[0];
//         var currentThumbnailSlide = $(".slider-thumbnail .swiper-slide-thumb-active");
//         var currentSVG = currentThumbnailSlide.find('.progress-circle circle')[0];
//         if (activeVideo && activeVideo !== currentVideo) {
//             activeVideo.pause();
//             activeVideo.currentTime = 0; }

//         currentVideo.play();
//         activeVideo = currentVideo;
//         $(currentSVG).animate({
//             'strokeDashoffset': '0px',
//             'opacity': 1
//         }, 5000);
//     }

//     playCurrentVideo();

//     podcastslider.on('slideChange', function () {
//                     $(".slider-thumbnail .swiper-slide").find('.progress-circle circle').css('strokeDashoffset', '314px');

//         playCurrentVideo();
        
//     });
// }
// handleVideoPlayback();
    
    
// old
    swiperpodcast = new Swiper(".podcastReview", {
    paginationClickable: true,
    slidesPerView: 1,
    freeMode: true,
    freeModeSticky: true,
    speed: 500,
    loop: true,
    navigation: {
        nextEl: '.podright',
        prevEl: '.podleft',
    },
    // grabCursor: false,
    // touchRatio: 0.5,
    // slideToClickedSlide: false,
   
});
    
    
    
    function setupBlogList(blogToShow, buttonSelector, listSelector) {
            var blogbutton = $(buttonSelector);
            var bloglist = $(listSelector);
            blogbutton.hide();
            var blognumInList = bloglist.length;
            bloglist.hide();
            if (blognumInList > blogToShow) {
                blogbutton.show();
            }
            bloglist.slice(0, blogToShow).show();
            blogbutton.click(function() {
                var showing1 = bloglist.filter(':visible').length;
                bloglist.slice(showing1, showing1 + blogToShow).fadeIn();
                var nowShowing1 = bloglist.filter(':visible').length;
                if (nowShowing1 >= blognumInList) {
                    blogbutton.hide();
                }
            });
        }


    setupBlogList(2, '.commentshowmore', '.usercomment');
    
    setupBlogList(6, '.ourspeakerbtn', '.our-speaker .row .col-md-4');
    setupBlogList(5, '.impressionsbtn', '.impressions .row div');
    
    
    
     $('#fileToUpload').on('change', function() {
                var fileName = $(this).val().split('\\').pop();
                $('.filename').text(fileName);
            });
    
swiperblog = new Swiper(".blogslider", {
    paginationClickable: true,
    slidesPerView: 1,
    freeMode: true,
    freeModeSticky: true,
    speed: 500,
    loop: true,
    navigation: {
        nextEl: '#js-next1',
        prevEl: '#js-prev1',
    },
    grabCursor: false,
    touchRatio: 0.5,
    slideToClickedSlide: false,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        3000: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

    
    
$(".replyform").hide();
   $(".replybtn").on("click", function() {
    $(this).siblings(".replyform").toggle("slow");
});


       
    var blogToShow = 4;
    var blogbutton = $(".blogshow");
    var bloglist =  $(".bloglistData2 .col-md-6");
    blogbutton.hide();
    var blognumInList = bloglist.length;
     bloglist.hide();
    if (blognumInList > blogToShow) {
      blogbutton.show();
    }
    bloglist.slice(0, blogToShow).show();
    blogbutton.click(function(){
      var showing1 = bloglist.filter(':visible').length;
      bloglist.slice(showing1, showing1 + blogToShow).fadeIn();
      var nowShowing1 = bloglist.filter(':visible').length;
      if (nowShowing1 >= blognumInList) {
        blogbutton.hide();
      }
    });
   

    
    
   if ($(window).width() < 991) {
  const swiper = new Swiper(".impactslider", {
    paginationClickable: true,
    slidesPerView: 1.3,
    speed: 500,
    loop: true,
    centeredSlides: true,
    spaceBetween: 25,
    centeredSlidesBounds: true,
    navigation: false,
    grabCursor: true, 
    touchRatio: 0.5, 
    slideToClickedSlide: true, 
  });
}
    
    if($(window).width() > 991){
         $('.impact_make_1').on('mouseenter', function() {
                $(this).siblings().addClass("impactdecwidth");
                $(this).addClass("impactincwidth");
                $(this).find(".impactvideo")[0].play();
            });

            $('.impact_make_1').on('mouseleave', function() {
                $(this).siblings().removeClass("impactdecwidth");
                $(this).removeClass("impactincwidth");
                $(this).find(".impactvideo")[0].pause();
            });
            
    }else {
            $('.impact_make_1').off('mouseenter mouseleave');
            $('.impactvideo').each(function() {
                this.play();
            });
        
    }
    
   
            $('.accordion-collapse').on('shown.bs.collapse', function() {
                $(this).siblings().children('.accordion-button').find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
            });

            $('.accordion-collapse').on('hidden.bs.collapse', function() {
                $(this).siblings().children('.accordion-button').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
            });
    
    
    //  if ($(window).width() > 991) {
    // $(".item_two").mouseenter(() => {
    //     $(".item_one").addClass("aniOne");
    //     $(".item_two").addClass("aniTwo");
    // });
    
    // $(".item_one").mouseenter(() => {
    //     $(".item_one").removeClass("aniOne");
    //     $(".item_two").removeClass("aniTwo");
    // });
    
    //  }

    
    $(".homevideoplay1").on("click", () => {
        $("#bruchlab_video").attr('src',"videos/dive.mp4");
    });
    
    $(".videoplaybtn2").on("click", () => {
        $("#bruchlab_video").attr('src',"videos/Licious-Founders.mp4");
    });
    
    // portfolio
    function showList(listContainerClass,buttonClass){
    var list = $(`${listContainerClass} .current_investment_data_0`);
    var numToShow = 2;
    console.log(buttonClass)
    var button = $(buttonClass);
    button.hide();
    var numInList = list.length;
    list.hide();
    console.log(typeof numInList);
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function(){
      var showing = list.filter(':visible').length;
      list.slice(showing, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
    });
    }
    
    function updateActiveTab() {
    if ($('#currentInvestment').hasClass('active')) {
      showList('.current_investment_data_2','.currentInvestmentbtn');
    } else if ($('#previousInvestment').hasClass('active')) {
      showList('.previous_investment_data_2','.previousInvestmentbtn');
    }
  }
  
  updateActiveTab();

    $('#myTabs a').on('shown.bs.tab', function (e) {
      updateActiveTab();
    });
    

   gsap.registerPlugin(ScrollTrigger);
  // Setup
 

// $(".audioplayer").on("click", function() {
//     var audioElement = $(this).children(".audioplay").get(0);
//     var playButton = $(this).children(".playaudio");

//     $(".audioplay").not(audioElement).each(function() {
//         this.pause();
//     });

//     $(".playaudio").addClass("fa-caret-right").removeClass("fa-pause");

//     $(audioElement).on('ended', function() {
//         playButton.addClass("fa-caret-right").removeClass("fa-pause");
//     });

//     if (audioElement.paused) {
//         audioElement.play();
//         playButton.removeClass("fa-caret-right").addClass("fa-pause");
//     } else {
//         audioElement.pause();
//         playButton.addClass("fa-caret-right").removeClass("fa-pause");
//     }
// });




//   if ($(window).width() > 991) {
//     var ti = gsap.timeline();
//     ti.to(".bannerhding",{duration: 0.6, opacity:0, ease: "power2.out",},0);
//     ti.to(".topcircle", {duration:0.6, y:-600,ease: "power2.out",}, 0);
//     ti.to(".leftcircle", {duration:0.6, x:-600,ease: "power2.out",}, 0);
//     ti.to(".rightcircle", {duration:0.6, x:600,ease: "power2.out",}, 0);
//     ti.to(".eruditusvideo", { duration: 4, x: 0,y:0,scale: 1, ease: "power2.out", }, 0);   
//     ti.to(".ashwindameera", { duration: 4, x: 0,y: 0,height: "19.8em",width:"14em",scale: 1, ease: "power2.out" }, 0);   
//     ti.from(".ashwindameera .company_emp", { duration: 1.5,x:"-18px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".ashwindameera .company_emp .quotemark-svg", { duration: 1.5,opacity:0, ease: "power2.out" }, "-=1");   
//     ti.from(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
//     ti.to(".licious",{ duration: 4, y: "0",scale: 1, ease: "power2.out" }, 0)
//     ti.to(".abhayhanjura", { duration: 4, x: 0,y:0,height: "19.8em",width:"14em",scale: 1, ease: "power2.out" }, 0);   
//     ti.from(".abhayhanjura .company_emp", { duration: 1.5,x:"-18px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".abhayhanjura .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
//     ti.from(".abhayhanjura .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".pepperfry",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
//     ti.to(".ambareeshmurthy", { duration: 4, x: 0,y:0,height: "19.8em",width:"15em",scale: 1, ease: "power2.out" }, 0);   
//     ti.from(".ambareeshmurthy .company_emp", { duration: 1.5,x:"-18px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".ambareeshmurthy .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
//     ti.from(".ambareeshmurthy .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".lendingkart",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);

    
//     ScrollTrigger.create({
//         trigger: ".homediv",
//         start: "top top",
//         end: '20%',
//         scrub: 1,
//         pin: ".homediv",
//         ease: "power2.out",
//         animation: ti,
//     //   markers: true,
//     });
    
//     }else if($(window).width() < 992 && $(window).width() > 767){
//         // GSAP TimelineMax
//     var ti = gsap.timeline();
//     // Animation for leftImage (.item_one)
//     ti.to(".bannerhding",{duration: 0.6, opacity:0, ease: "power2.out",},0);
//     ti.to(".topcircle", {duration:0.6, y:-500,ease: "power2.out",}, 0);
//     ti.to(".leftcircle", {duration:0.6, x:-500,ease: "power2.out",}, 0);
//     ti.to(".rightcircle", {duration:0.6, x:500,ease: "power2.out",}, 0);
//     ti.to(".eruditusvideo", { duration: 4, x: 0,y:0,scale: 1, ease: "power2.out", }, 0);   
//     ti.to(".ashwindameera", { duration: 4, x: 0,y: 0,height: "17em",width:"20.5em",scale: 1, ease: "power2.out" }, 0);   
//     ti.from(".ashwindameera .company_emp", { duration: 1.5,x:"-32px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".ashwindameera .company_emp .quotemark-svg", { duration: 1.5,opacity:0, ease: "power2.out" }, "-=1");   
//     ti.from(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
//     ti.to(".licious",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0)
//     ti.to(".abhayhanjura", { duration: 4, x: 0,y:0,height: "17em",width:"20.5em",scale: 1, ease: "power2.out" }, 0);   
//     ti.from(".abhayhanjura .company_emp", { duration: 1.5,x:"-12px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".abhayhanjura .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
//     ti.from(".abhayhanjura .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".pepperfry",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
//     ti.to(".ambareeshmurthy", { duration: 4, x: 0,y:0,height: "19.5em",width:"25em",scale: 1, ease: "power2.out" }, 0);   
//     ti.from(".ambareeshmurthy .company_emp", { duration: 1.5,x:"-12px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".ambareeshmurthy .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
//     ti.from(".ambareeshmurthy .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".lendingkart",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
    
//     ScrollTrigger.create({
//         trigger: ".homediv",
//         start: "top top",
//         end: '25%',
//         scrub: 1,
//         pin: ".homediv",
//         ease: "power2.out",
//         animation: ti,
//     });
    
//     }else if($(window).width() < 768 && $(window).width() > 100){
//          var ti = gsap.timeline();
//     // Animation for leftImage (.item_one)
//     ti.to(".bannerhding",{duration: 0.6, opacity:0, ease: "power2.out",},0);
//     ti.to(".topcircle", {duration:0.6, y:-500,ease: "power2.out",}, 0);
//     ti.to(".leftcircle", {duration:0.6, x:-500,ease: "power2.out",}, 0);
//     ti.to(".rightcircle", {duration:0.6, x:500,ease: "power2.out",}, 0);
//     ti.to(".eruditusvideo", { duration: 4, x: 0,y:0,scale: 1, ease: "power2.out", }, 0);   
//     ti.from(".ashwindameera", { duration: 4, x: "197px",y: "-182px",height: "11em",width:"11em",scale: 0.5, ease: "power2.out" }, 0);   
//     ti.from(".ashwindameera .company_emp", { duration: 1.5,x:"-16px", y:"8px",ease: "power2.out" }, "-=1");
//     ti.from(".ashwindameera .company_emp .quotemark-svg", { duration: 1.5,opacity:0, ease: "power2.out" }, "-=1");   
//     ti.from(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
//     ti.to(".licious",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0)
//     ti.from(".abhayhanjura", { duration: 4, x: "-37.0002px",y:"-250px",height: "10em",width:"10em",scale: 0.5, ease: "power2.out" }, 0);   
//     ti.from(".abhayhanjura .company_emp", { duration: 1.5,x:"-12px", y:"0px",ease: "power2.out" }, "-=1");
//     ti.from(".abhayhanjura .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
//     ti.from(".abhayhanjura .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".pepperfry",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
//     ti.from(".ambareeshmurthy", { duration: 4, x: "216.492px",y:"-320.4774px",height: "10em",width:"9em",scale: 0.5, ease: "power2.out" }, 0);   
//     ti.from(".ambareeshmurthy .company_emp", { duration: 1.5,x:"-12px", y:"3px",ease: "power2.out" }, "-=1");
//     ti.from(".ambareeshmurthy .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
//     ti.from(".ambareeshmurthy .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".lendingkart",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0)

    
//     ScrollTrigger.create({
//         trigger: ".homediv",
//         start: "top top",
//         end: '25%',
//         scrub: 2,
//         pin: ".homediv",
//         ease: "power2.out",
//         animation: ti,
//      //markers: true, // Uncomment to add markers for visualization (optional)
//     });
//     }
    
    
    
  
 if ($(window).width() < 991) {
  const swiper = new Swiper(".swiper-container-port", {
    paginationClickable: true,
    slidesPerView: 1.3,
    speed: 500,
    loop: true,
    centeredSlidesBounds: true,
    navigation: false,
    grabCursor: true, // Adds a grab cursor when you hover over the slider
    touchRatio: 0.5, // Sensitivity of touch events
    slideToClickedSlide: true, // Slide to the clicked slide on click/tap
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 25,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      centeredSlides: true,
    },
  }


  });
}

if ($(window).width() < 767) {
  const swiper = new Swiper(".india_advisoryslider", {
    paginationClickable: true,
    slidesPerView: 1,
    speed: 500,
    
    loop: true,
    navigation: false,
    grabCursor: true, 
    touchRatio: 0.5, 
    slideToClickedSlide: true, 
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
  });
}


  const swiper = new Swiper(".teamMemSlider", {
    paginationClickable: true,
    slidesPerView: 1,
    speed: 500,
    loop: true,
    navigation: false,
    grabCursor: true, 
    touchRatio: 0.5, 
    slideToClickedSlide: true, 
    navigation: {
    nextEl: ".swiperteamleft",
    prevEl: ".swiperteamright",
    
  },
      breakpoints: {
    320: {
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 12,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  }

  });


//   if ($(window).width() < 767) {
//       gsap.utils.toArray('.part_1').forEach((section, i) => {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           pin: true,
//           pinSpacing: false,
//           ease: "power2.inOut",
       
//           onEnter: () => {
           
//             gsap.to(section, {
              
//               duration: 0.5, 
//               ease: "power2.inOut",
//             });
//           },
//           onLeaveBack: () => {
          
//             gsap.to(section, {
            
//               duration: 0.5,
//               ease: "power2.inOut",
//             });
//           },
//         });
//       });
//     }


// if ($(window).width() < 767) {
//      var pinT2 = gsap.timeline({
//     scrollTrigger: { 
//         trigger: ".part_inner",
//         pin: true,
//         start: 'top 10px',
       
//         end: "+=" + (window.innerHeight * 1.8),
//         scrub: 1,
//     }
// })
// .to(".item_two", {ease: "power1.inOut", y: 0, duration: 1,delay: 1})
//     }


 
  // const boxes = gsap.utils.toArray('.box');

  // boxes.forEach((box, i) => {
  //   const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0});
  //   ScrollTrigger.create({
  //     trigger: box,
  //     animation: anim,
  //     toggleActions: 'play none none none',
  //     once: true,
  //   });
  // });
  

  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'

  // });
  // $('.slider-nav').slick({
  //   centerMode:true,
  //   slidesToShow: 3,
  //   speed: 500,
  //   infinite: true,
  //   cssEase: 'linear',
  //   variableWidth: true,
  //   dots: false,

  //   arrows: true,
  //   prevArrow: '<div class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></div>',
  //   nextArrow: '<div class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></div>'
  // });

  
  
//   if ($(window).width() > 767) {
    // GSAP TimelineMax
    // var tl = gsap.timeline();
    
    // Animation for leftImage (.item_one)
    // tl.from(".item_one", { duration: 2, width:"65%", ease: "power1.inOut" }, 0);   
    // tl.to(".item_one .part_inn_2 .h1", { duration: 0.8,x:"0px", y:"148px",  fontSize:"40px", ease: "power1.inOut" }, "-=1"); 
    // tl.to(".item_one .partbertls", { duration: 0.7,opacity:0,y: "120px", ease: "power1.inOut" },"-=1");
    // tl.to(".bgbert1", { duration: 0.6,opacity:0, ease: "power1.inOut",},"-=1");
    // tl.from(".item_two", { duration: 2, width:"35%", ease: "power1.inOut" }, 0);    
    // tl.from(".item_two .part_inn_2 .h1", { duration: 0.8,x:"0px", y:"148px",  fontSize:"40px", ease: "power1.inOut" }, "-=1");
    // tl.to(".item_two .partbertelsman", { duration: 0.7, opacity:1,y: 0, ease: "power1.inOut" },"-=0.8");
    // tl.from(".bgbert", { duration: 0.6,opacity:0, ease: "power1.inOut",},"-=1");
    

    // Animation for leftImage (.item_one)
    // tl.to(".item_one", {duration: 1.5, x:"-100%",ease: "power1.inOut",delay:0.4},2);
    
    // Animation for rightImage (.item_two)
    // tl.to(".item_two", {duration:1.5,  x:"100%",ease: "power1.inOut",delay:0.4},2)
    // tl.fromTo(".investment_details", {autoAlpha: 0, y: 100, opacity:0}, {duration: 2,delay:0.1,ease: "power1.inOut", autoAlpha: 1, y: 0, opacity:1});
    // tl.to(".hide_sec", { className: "removed", delay: 3});
    // tl.fromTo(".investment_details p", {autoAlpha: 0, y: 100, opacity:0}, {duration: 2,delay:0.2,ease: "power1.inOut", autoAlpha: 1, y: 0, opacity:1});
        // tl.from(".investment_data", { duration: 1.5, y:80,opacity:0, ease: "power1.inOut" }, "+=0.1");   


    // GSAP ScrollTrigger
    
    
    // ScrollTrigger.create({
    //     trigger: ".scroll_wrap",
    //     start: "0% top",
    //     end: '170%',
    //     scrub: 1,
    //     pin: ".scroll_wrap",
        // animation: tl,
      // markers: true, // Uncomment to add markers for visualization (optional)
    // });
    
    // }
    
    
  
  


//     if($(window).width() > 0){
//         const showAnim = gsap
//     .from(".main-tool-bar", {
//       yPercent: -100,
//       paused: true,
//       duration: 0.2
//     })
//     .progress(1);
  
//   ScrollTrigger.create({
//   start: "top top+=100", 
//     end: 99999,
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse();
//     }
//   });
//     }
  


// const boxes = gsap.utils.toArray('.box');
// boxes.forEach((box, i) => {
//   const anim = gsap.fromTo(box, {autoAlpha: 0, y: 120, opacity:0}, {duration: 1, autoAlpha: 1, y: 0, opacity:1,ease: "slow"});
//   ScrollTrigger.create({
//     trigger: box,
//     animation: anim,
//     toggleActions: 'play none none none',
//     once: true,
//   });
// });

// if($(window).width() < 767){
    
// const boxes = gsap.utils.toArray('.box1');
// boxes.forEach((box, i) => {
//   const anim = gsap.fromTo(box, {autoAlpha: 0, y: 120, opacity:0}, {duration: 1, autoAlpha: 1, y: 0, opacity:1,ease: "slow"});
//   ScrollTrigger.create({
//     trigger: box,
//     animation: anim,
//     toggleActions: 'play none none none',
//     once: true,
//   });
// });





// }




})


const burgerMenu = document.getElementById("navbarSupportedContent");
const scrollElements = document.querySelector(".navbartog");
if (scrollElements) {
  scrollElements.addEventListener("click", () => {
      scrollElements.classList.toggle("is-active");
        burgerMenu.classList.toggle("menu");
  });
}

// if (scrollElements) {
//   scrollElements.forEach((scrollElement) => {
//       scrollElement.addEventListener("click", () => {
//          burgerMenu.classList.remove("is-active");
//          navbarMenu.classList.remove("is-active");
//       });
//   });
// }


// var currentAudio = null;

// function toggleAudio(playerId) {
//     var audioElement = document.getElementById(playerId);
//     var el = document.querySelectorAll(".playaudio");
    
//   console.log(el)
//     if (currentAudio && currentAudio !== audioElement) {
//         currentAudio.pause();
//         el.classList.remove("fa-pause")
//         el.classList.add("fa-caret-right")
        
//     }

//     if (audioElement.paused) {
//         audioElement.play();
//         currentAudio = audioElement;
//         el.classList.remove("fa-caret-right")
//         el.classList.add("fa-pause")
//     } else {
//         audioElement.pause();
//         currentAudio = null;
//         el.classList.add("fa-caret-right")
//         el.classList.remove("fa-pause")
//     }
// }