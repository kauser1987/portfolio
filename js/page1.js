
gsap.to("#page1 h1", {
    // transform: "translateX(-100%)",
    x:"-100%",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        pin: true,
        
    }
})

var tl0=gsap.timeline();
tl0.to("#page1 #med #bounding #boundingelem,#img",{
    y:0,
    duration:2.5,
    delay:2.5,
    opacity:1,
    scrollTrigger: {
        trigger: "#page1 #med #bounding #boundingelem",
        scroller: "#main",
        scrub:1.5,
       
        
    }
})

var tl1 = gsap.timeline()
tl1.from("#page1 #members ul li",{
    y:"100%",
    opacity:0,
    duration:2.5,
    delay:2,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#page1 #members ul li",
        scroller: "#main",
        scrub:1.5,
        
    }
    })
    



