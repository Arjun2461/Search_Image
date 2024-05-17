const client_id = "iCtHD-G0CW0WzO7xCdJJJG8rQ3VHSkYuUaY9Xe5_NlM";
let btn = document.querySelector(".search-btn");
let showmore=document.querySelector(".show-more-btn")
let imgname1 = document.querySelector("input");   


let page = 1;

btn.addEventListener("click", async () => {
     page = 1;
    let div1=document.querySelector("#div1");
    console.log(div1);
    div1.setAttribute("class","background");
    let imgname=imgname1.value;
    console.log(imgname);   
    let imgarray = await searchImage(imgname);
    showimg(imgarray);
});

async function searchImage(imgname) {
    let url = `https://api.unsplash.com/search/photos?page=${page}&client_id=${client_id}&query=`
    try {
        let imgurl = await axios.get(url + imgname);
        return imgurl.data.results;
    } catch (error) {
        console.log("Error := ", error)
    }
}


function showimg(imgarray) {

    let outerdiv = document.querySelector("#searchimg")
    if(page==1){
       outerdiv.innerHTML ="";
    }     
     
  for (img of imgarray) {
        let innerdiv = document.createElement("div");
        innerdiv.setAttribute("class", "srch-result");
        outerdiv.appendChild(innerdiv);

        let pic = document.createElement("img");
        pic.src = img.urls.small;
        pic.alt = img.alt_description
        innerdiv.appendChild(pic);

        let imglink = document.createElement("a");
        imglink.href = img.links.html;
        imglink.textContent = img.alt_description
        innerdiv.appendChild(imglink);

    }

    page++
    if(page>1){
        showmore.style.display="block";
    }
}


showmore.addEventListener("click", async () => {
    let div1=document.querySelector("#div1");
    console.log(div1);
    div1.setAttribute("class","background");
    let imgname=imgname1.value;
    let imgarray = await searchImage(imgname);
    showimg(imgarray);
});
