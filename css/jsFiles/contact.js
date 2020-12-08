var frmC = document.getElementById("frmC");
frmC.addEventListener("submit",(err)=>{
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let fn = document.getElementById("fn");
    let em = document.getElementById("em");
    let te = document.getElementById("te");
    let divcv1 = document.getElementById("divcv1");
    let divcv2 = document.getElementById("divcv2");
    let divcv3 = document.getElementById("divcv3");

    // full name validation
    if(fn.value.length === 0 || fn.value.length < 5){
        divcv1.innerHTML = "Invalid(short full name)";
        divcv1.style.color = "rgb(230,0,0)";
        divcv1.style.fontWeight = "bold";
        fn.style.border = "2px solid rgb(230,0,0)";
        err.preventDefault();
    }
    else{
        divcv1.innerHTML = "";
        fn.style.border = "2px solid rgb(0,205,0)";
    }

    // Email validation
    let em1 = em.value.trim();
    if(em1.match(pattern)){
        divcv2.innerHTML = "";
        em.style.border = "2px solid rgb(0,205,0)";
    } 
    else{
        divcv2.innerHTML = "Email incorrect";
        divcv2.style.color = "rgb(230,0,0)";
        divcv2.style.fontWeight = "bold";
        em.style.border = "2px solid rgb(230,0,0)";
        err.preventDefault();
    }

    // Message validation
    if(te.value.length === 0 || te.value.length < 10){
        divcv3.innerHTML = "Invalid(short message)";
        divcv3.style.color = "rgb(230,0,0)";
        divcv3.style.fontWeight = "bold";
        te.style.border = "2px solid rgb(230,0,0)";
        err.preventDefault();
    }
    else{
        divcv3.innerHTML = "";
        te.style.border = "2px solid rgb(0,205,0)";
    }
})