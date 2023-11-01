
document.querySelectorAll(".elem").forEach((elem) => {
        var prevX = 0;
        var diffrot = 0;
        
    elem.addEventListener("mousemove", (dets) => {
        var diffY = (dets.clientY - elem.getBoundingClientRect().top);
        diffrot = dets.clientX - prevX;
        prevX = dets.clientX;
        document.querySelector("#minicircle").style.opacity="0";
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            top:diffY,
            left: dets.clientX-elem.getBoundingClientRect().left,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        })
    })
    elem.addEventListener("mouseleave", (dets) => {
        document.querySelector("#minicircle").style.opacity="1";
        var diffY = (dets.clientY - elem.getBoundingClientRect().top);
        diffrot = dets.clientX - prevX;
        prevX = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            top:diffY,
            left: dets.clientX-elem.getBoundingClientRect().left,
            opacity: 0,
            rotate: gsap.utils.clamp(-20,20,diffrot),
            
        })
    })
})