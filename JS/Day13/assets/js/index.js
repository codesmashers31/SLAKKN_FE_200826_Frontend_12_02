const btnData = document.getElementById("btn")

const title = document.getElementById("title")

const imgs = document.getElementById("imgs")

const datas = document.querySelector("#datas")

const link = document.getElementById("link")



btnData.addEventListener("click",()=>{

//    datas.style.display = "none"

   if(datas.style.display ==="block"){
     datas.style.display = "none"
     btnData.innerText = "Show"

   }else{
    datas.style.display = "block"
    btnData.innerText = "Hide"
   }

   
  

})

link.style.cursor = "pointer"
link.style.backgroundColor = "blue"
link.style.color = "white"
link.style.padding = "10px"
link.style.borderRadius = "5px"

link.addEventListener('click',()=>{

    window.location.href = "intro.html"
})