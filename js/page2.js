const throttleFunction=(func, delay)=>{
      let prev = 0; 
      return (...args) => {
        let now = new Date().getTime(); 
     if(now - prev> delay){ 
          prev = now;
     return func(...args);  
        }
      }
    }
    document.querySelector(".title").addEventListener("click", throttleFunction((dets)=>{
        var div=document.createElement("div");
        div.classList.add("imgholder")
        div.style.left=dets.clientX+'px';
        div.style.top=dets.clientY+'px';
        document.body.appendChild(div)
        var img=document.createElement("img")
        img.classList.add("img")
        img.setAttribute("src","./images/pop-up.webp")
        div.appendChild(img)
        gsap.to("img",{
            y:0,
            duration:0.5,
        })
        gsap.to("img",{
            y:"-100%",
            duration:2,
        })
        setTimeout(()=>{
            div.remove();
        },1000)
    }, 500));
