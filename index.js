const btn = document.querySelector(".btn")
const title = document.querySelector("#title")

  
btn.addEventListener("click",()=>{
    if (btn.innerHTML==="Light"){
        btn.innerHTML="Dark"
        document.body.style.backgroundColor ="white"
        title.style.color = "red"
        title.innerHTML = "Light Mode"
    }else{
        btn.innerHTML="Light"
        document.body.style.backgroundColor ="black"
        title.style.color = "green"
        title.innerHTML = "Dark Mode"
    }
     
})

