var rect = document.querySelector("#rectangle");
var rectleft = rect.getBoundingClientRect().left;
function recta() {
    var diffX;
    rect.addEventListener("mousemove", (dets) => {
        var diffX = dets.clientX - rectleft;
        if (diffX < (rect.getBoundingClientRect().width / 2)) {
            var colorred = gsap.utils.mapRange(0, (rect.getBoundingClientRect().width / 2), 255, 0, diffX)
            gsap.to("#rectangle", {
                backgroundColor: `rgb(${colorred},0,0)`,
                duration: 1,
            })
        } else {
            var colorblue = gsap.utils.mapRange((rect.getBoundingClientRect().width / 2), (rect.getBoundingClientRect().width), 0, 255, diffX)
            gsap.to("#rectangle", {
                backgroundColor: `rgb(0,0,${colorblue})`,
                duration: 1,
            })
        }
    })
    rect.addEventListener("mouseleave", () => {

        gsap.to("#rectangle", {
            backgroundColor: "white",
            duration: 1,
        })

    })
}
recta()

function axisFollow() {
    var container=document.querySelector("#container");
    var scater=document.querySelector("#scater");
    container.addEventListener("mousemove", (dets) => {
        document.querySelector("#minicircle").style.opacity="0";
       scater.style.transform=`translateX(${dets.clientX-container.getBoundingClientRect().left}px)`
    })
    container.addEventListener("mouseleave", (dets) => {
        document.querySelector("#minicircle").style.opacity="1";
    })
}
axisFollow()