const client_id="iCtHD-G0CW0WzO7xCdJJJG8rQ3VHSkYuUaY9Xe5_NlM";
let url=`https://api.unsplash.com/search/photos?page=1&client_id=${client_id}&query=`
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let imgname=document.querySelector("input").value
    let imgarray= await searchimg(imgname);
    console.log(imgarray);
    showimg(imgarray);
})

async function searchimg(imgname){
    try{
        let res = await axios.get(url+imgname);
        return res.data.results;
    }catch(error){
        console.log("Error := ",error)
    }
}

function showimg(imgarray){
  
    let div=document.querySelector("#searchimg");
    div.innerHTML="";
    for(img of imgarray){
        let photo=document.createElement("img");
        photo.setAttribute("src",img.urls.small);
        photo.setAttribute("class","separate-img");
        div.appendChild(photo);
        console.log(img.urls.small);
    }
}