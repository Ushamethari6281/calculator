document.querySelectorAll(".btn").forEach((ele)=>{
    ele.addEventListener("click",()=>{
        document.querySelector(".input").value += ele.innerText;
    })
})

document.querySelector(".equal").addEventListener("click",()=>{
    let s=document.querySelector(".input").value
    let ans=eval(s)
    document.querySelector(".input").value=ans
})
document.querySelector(".clear").addEventListener("click",()=>{
    document.querySelector(".input").value = "";
})
document.querySelector(".bs").addEventListener("click",()=>{
    let s=document.querySelector(".input").value;
    s= s.substr(0,s.length-1)
    document.querySelector(".input").value=s;
})