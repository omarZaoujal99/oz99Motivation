var a = document.getElementById("addLink");
var b = document.getElementById("addElmnt");

a.addEventListener("mouseover",()=>{
    console.log("hhhh");
    b.style.zIndex = 2;
    b.innerHTML = "<h1>hahahahaha</h1>";
})
a.addEventListener("mouseleave",()=>{
    b.innerHTML = "";
})