$(document).ready(function() {


    


    if ($(window).width() > 991) {
    var ti = gsap.timeline();
    ti.to(".bannerhding",{duration: 0.6, opacity:0, ease: "power2.out",},0);
    ti.to(".topcircle", {duration:0.6, y:-600,ease: "power2.out",}, 0);
    ti.to(".leftcircle", {duration:0.6, x:-600,ease: "power2.out",}, 0);
    ti.to(".rightcircle", {duration:0.6, x:600,ease: "power2.out",}, 0);
    ti.to(".eruditusvideo", { duration: 4, x:0, y:0, scale: 1, ease: "power2.out", }, 0);   
    ti.to(".ashwindameera", { duration: 4, x: 0,y: 0,height: "19.8em",width:"14em",scale: 1, ease: "power2.out" }, 0);   
    ti.from(".ashwindameera .company_emp", { duration: 1.5,x:"-18px", y:"3px",ease: "power2.out" }, "-=1");
    ti.from(".ashwindameera .company_emp .quotemark-svg", { duration: 1.5,opacity:0, ease: "power2.out" }, "-=1");   
    ti.from(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
    ti.to(".licious",{ duration: 4, y: "0",scale: 1, ease: "power2.out" }, 0)
    ti.to(".abhayhanjura", { duration: 4, x: 0,y:0,height: "19.8em",width:"14em",scale: 1, ease: "power2.out" }, 0);   
    ti.from(".abhayhanjura .company_emp", { duration: 1.5,x:"-18px", y:"3px",ease: "power2.out" }, "-=1");
    ti.from(".abhayhanjura .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
    ti.from(".abhayhanjura .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
    ti.to(".pepperfry",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
    ti.to(".ambareeshmurthy", { duration: 4, x: 0,y:0,height: "19.8em",width:"15em",scale: 1, ease: "power2.out" }, 0);   
    ti.from(".ambareeshmurthy .company_emp", { duration: 1.5,x:"-18px", y:"3px",ease: "power2.out" }, "-=1");
    ti.from(".ambareeshmurthy .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
    ti.from(".ambareeshmurthy .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
    ti.to(".lendingkart",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
    
    ScrollTrigger.create({
        trigger: ".homediv",
        start: "top top",
        end: '17%',
        scrub: 2,
        pin: ".homediv",
        ease: "power2.out",
        animation: ti,
    //   markers: true,
    });
    
    }else if($(window).width() < 992 && $(window).width() > 767){
        // GSAP TimelineMax
    var ti = gsap.timeline();
    // Animation for leftImage (.item_one)
    ti.to(".bannerhding",{duration: 0.6, opacity:0, ease: "power2.out",},0);
    ti.to(".topcircle", {duration:0.6, y:-500,ease: "power2.out",}, 0);
    ti.to(".leftcircle", {duration:0.6, x:-500,ease: "power2.out",}, 0);
    ti.to(".rightcircle", {duration:0.6, x:500,ease: "power2.out",}, 0);
    ti.to(".eruditusvideo", { duration: 4, x: 0,y:0,scale: 1, ease: "power2.out", }, 0);   
    ti.to(".ashwindameera", { duration: 4, x: 0,y: 0,height: "17em",width:"20.5em",scale: 1, ease: "power2.out" }, 0);   
    ti.from(".ashwindameera .company_emp", { duration: 1.5,x:"-32px", y:"3px",ease: "power2.out" }, "-=1");
    ti.from(".ashwindameera .company_emp .quotemark-svg", { duration: 1.5,opacity:0, ease: "power2.out" }, "-=1");   
    ti.from(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
    ti.to(".licious",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0)
    ti.to(".abhayhanjura", { duration: 4, x: 0,y:0,height: "17em",width:"21em",scale: 1, ease: "power2.out" }, 0);   
    ti.from(".abhayhanjura .company_emp", { duration: 1.5,x:"-12px", y:"3px",ease: "power2.out" }, "-=1");
    ti.from(".abhayhanjura .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
    ti.from(".abhayhanjura .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
    ti.to(".pepperfry",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
    ti.to(".ambareeshmurthy", { duration: 4, x: 0,y:0,height: "19.5em",width:"25em",scale: 1, ease: "power2.out" }, 0);   
    ti.from(".ambareeshmurthy .company_emp", { duration: 1.5,x:"-12px", y:"3px",ease: "power2.out" }, "-=1");
    ti.from(".ambareeshmurthy .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
    ti.from(".ambareeshmurthy .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
    ti.to(".lendingkart",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
    
    ScrollTrigger.create({
        trigger: ".homediv",
        start: "top top",
        end: '20%',
        scrub: 2,
        pin: ".homediv",
        ease: "power2.out",
        animation: ti,
    });
    
    }else if($(window).width() < 768 && $(window).width() > 100){
    //      var ti = gsap.timeline();
    // // Animation for leftImage (.item_one)
    // ti.to(".bannerhding",{duration: 0.6, opacity:0, ease: "power2.out",},0);
    // ti.to(".topcircle", {duration:0.6, y:-500,ease: "power2.out",}, 0);
    // ti.to(".leftcircle", {duration:0.6, x:-500,ease: "power2.out",}, 0);
    // ti.to(".rightcircle", {duration:0.6, x:500,ease: "power2.out",}, 0);
    // ti.to(".eruditusvideo", { duration: 4, x: 0,y:0,scale: 1, ease: "power2.out", }, 0);   
    // ti.from(".ashwindameera", { duration: 4, x: "197px",y: "-182px",height: "11em",width:"11em",scale: 0.5, ease: "power2.out" }, 0);   
    // ti.from(".ashwindameera .company_emp", { duration: 1.5,x:"-16px", y:"8px",ease: "power2.out" }, "-=1");
    // ti.from(".ashwindameera .company_emp .quotemark-svg", { duration: 1.5,opacity:0, ease: "power2.out" }, "-=1");   
    // ti.from(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
    // ti.to(".licious",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0)
    // ti.from(".abhayhanjura", { duration: 4, x: "-37.0002px",y:"-250px",height: "10em",width:"10em",scale: 0.5, ease: "power2.out" }, 0);   
    // ti.from(".abhayhanjura .company_emp", { duration: 1.5,x:"-12px", y:"0px",ease: "power2.out" }, "-=1");
    // ti.from(".abhayhanjura .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
    // ti.from(".abhayhanjura .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
    // ti.to(".pepperfry",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0);
    // ti.from(".ambareeshmurthy", { duration: 4, x: "216.492px",y:"-320.4774px",height: "10em",width:"9em",scale: 0.5, ease: "power2.out" }, 0);   
    // ti.from(".ambareeshmurthy .company_emp", { duration: 1.5,x:"-12px", y:"3px",ease: "power2.out" }, "-=1");
    // ti.from(".ambareeshmurthy .company_emp .quotemark-svg", { duration: 0.8,opacity:0,ease: "power2.out" }, "-=1");   
    // ti.from(".ambareeshmurthy .mb-0", { duration: 1.5, opacity: 0,y:120, ease: "power2.out",delay:1 }, 1);
    // ti.to(".lendingkart",{ duration: 4,x:0, y: "0",scale: 1, ease: "power2.out" }, 0)

    
    // ScrollTrigger.create({
    //     trigger: ".homediv",
    //     start: "top top",
    //     end: '20%',
    //     scrub: 2,
    //     pin: ".homediv",
    //     ease: "power2.out",
    //     animation: ti,
    //  //markers: true, // Uncomment to add markers for visualization (optional)
    // });


    //       $('.bannerhding, .eruditusvideo, .ashwindameera, .licious, .abhayhanjura, .pepperfry, .ambareeshmurthy, .lendingkart').each(function(index) {
        
    //     var delay = (index + 1) * 0.1 + 's'; 
    //     $(this).addClass('fadeInUp')
    //            .attr('data-wow-delay', delay);
    // });

    }


// if ($(window).width() > 991) {
//     var ti = gsap.timeline();
//     ti.to(".bannerhding",{duration: 0.6, opacity:1, ease: "power2.out",},0);
//     ti.to(".topcircle", {duration:0.3, y:212,ease: "power2.out",}, 0);
//     ti.to(".leftcircle", {duration:0.3, x:-36, y:-300, ease: "power2.out",}, 0);
//     ti.to(".rightcircle", {duration:0.3,x:0, y:-210,ease: "power2.out",}, 0);
//     ti.to(".eruditusvideo", { duration: 4, x:"-115px", y:0, z:0, scale: 0.5, ease: "power2.out", }, 0);   
//     ti.to(".ashwindameera", { duration: 4, x: "-65px",y: "-18px", z:0, height: "6em",width:"13em",scale: 0.5, ease: "power2.out"  }, 0);   
//     ti.to(".ashwindameera .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);   
//     ti.to(".licious",{ duration: 4, y: "-118px",scale: 0.5, ease: "power2.out"  }, 0)
//     ti.to(".abhayhanjura", { duration: 4, x: "65px",y: "20px", z:0, height: "6em",width:"13em",scale: 0.5, ease: "power2.out" }, 0);   
//     ti.to(".abhayhanjura .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".pepperfry",{ duration: 4,x:"-45px", y:"125px",scale: 0.5, ease: "power2.out" }, 0);
//     ti.to(".ambareeshmurthy", { duration: 4, x: "128px",y: "153px", z:0, height: "6em",width:"13em",scale: 0.5, ease: "power2.out" }, 0);   
//     ti.to(".ambareeshmurthy .mb-0", { duration: 2, opacity: 0, y:120, ease: "power2.out",delay:1 }, 1);
//     ti.to(".lendingkart",{ duration: 4,x:"210px", y: "-80px",scaleX:0.4,scaleY:0.5, ease: "power2.out" }, 0);
    
//     ScrollTrigger.create({
//         trigger: ".homediv",
//         start: "top top",
//         end: '15%',
//         scrub: 1,
//         pin: ".homediv",
//         ease: "power2.out",
//         animation: ti,
//     //   markers: true,
//     });
    
//     }else if($(window).width() < 992 && $(window).width() > 767){
//         // GSAP TimelineMax
//     var ti = gsap.timeline();
//     ti.to(".bannerhding",{duration: 0.6, opacity:1, ease: "power2.out",},0);
//     ti.to(".leftcircle", {duration:0.6, x:0,ease: "power2.out",}, 0);
//     ti.to(".rightcircle", {duration:0.6, x:0,ease: "power2.out",}, 0);
//     ti.to(".topcircle", {duration:0.6, x:0, y:0, ease: "power2.out",}, 0);
//     ti.to(".eruditusvideo", { duration: 2, x: -100,y:-100,scale: 0.5, ease: "power2.out", }, 0);   
//     ti.to(".ashwindameera", { duration: 2, x: 100,y: -100,scale: 0.5, ease: "power2.out" }, 0);   
//     ti.to(".licious",{ duration: 4,x: 250,y: 0,scale: 0.5, ease: "power2.out" }, 0)
//     ti.to(".abhayhanjura", { duration: 2, x: -250,y:0,scale: 0.5, ease: "power2.out" }, 0);   
//     ti.to(".pepperfry",{ duration: 2, x: -100,y:300,scale: 0.5, ease: "power2.out", }, 0);
//     ti.to(".ambareeshmurthy", {duration: 2, x: 0,y: 300,scale: 0.5, ease: "power2.out" }, 0);   
//     ti.to(".lendingkart",{ duration: 2, x: 300,y:200,scale: 0.5, ease: "power2.out", }, 0);
    
//     ScrollTrigger.create({
//         trigger: ".homediv",
//         start: "top top",
//         end: '25%',
//         scrub: 1,
//         pin: ".homediv",
//         ease: "power2.out",
//         animation: ti,
//     });
    
//     }
//     else if($(window).width() < 767 && $(window).width() > 100){
        
//        $('.bannerhding, .eruditusvideo, .ashwindameera, .licious, .abhayhanjura, .pepperfry, .ambareeshmurthy, .lendingkart').each(function(index) {
        
//         var delay = (index + 1) * 0.1 + 's'; 
//         $(this).addClass('wow fadeInUp animated')
//                .attr('data-wow-delay', delay);
//     });


//     }

})
