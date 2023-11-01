function time(){
    var count=0;
    setInterval(()=>{
        count+=(Math.floor((Math.random())*20))
        if(count<100){
            document.querySelector("#page-0 #count span").innerHTML=count+'%'
        }else{
            count=100;
            document.querySelector("#page-0 #count span").innerHTML=count+'%'
        }
        
    },125)
}
gsap.to("#count span",{
    delay:0.5,
    duration:1.2,
    onStart:time(),
})
gsap.to("#page-0",{
    y:"-100%",
    duration:1.5,
    delay:2,
})




