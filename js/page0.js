gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function mousefollower(xScale,yScale) {
    var circle=document.querySelector("#minicircle");
    window.addEventListener("mousemove",(dets)=>{
        circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xScale},${yScale})`
    })
}
function squezecircle() {
    var xScale=0;
    var yScale=0;
    var xprev=0;
    var yprev=0;
    var timer;
    window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timer);
        xScale=gsap.utils.clamp(0.8,1.2,dets.clientX-xprev);
        yScale=gsap.utils.clamp(0.8,1.2,dets.clientY-yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
        mousefollower(xScale,yScale)
       timer= setTimeout(()=>{
             document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
            
        },100)


    })
        
}
mousefollower()
squezecircle()
gsap.from("#nav ul li",{
    y:-100,
    duration:1,
    delay:3,
    stagger:0.2,
    opacity:-2,
})