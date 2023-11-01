var arr=[
    {dp:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"},
    {dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    story:"https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"},
]
var counter="";
var stories=document.querySelector("#stories")
arr.forEach((elem,idx)=>{
    counter+=`<div id="story"><img id="${idx}" src="${elem.dp}" alt=""/></div>`
})
stories.innerHTML=counter;
stories.addEventListener("click",(dets)=>{
    document.querySelector("#fullscreen").style.display="block";
    document.querySelector("#fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#fullscreen").style.display="none";
        
    }, 3000)
})