$(document).ready(function() {
    gsap.fromTo(
        ".event-mainlanding", 
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power1.out" }
    );
    gsap.from(".bcc-event, .techsparks-event", { opacity: 0, x: -600, duration: 1, ease: "power1.out" });
    gsap.from(".BertelsmannIndiaSummit2-event, .VCMeetsBertelsmann2-event", { opacity: 0, x: 600, duration: 1, ease: "power1.out" });
})