
// Motivational articls effects
function maEffect1(){
    var a = document.querySelector('.eff1MA');
    var pos = a.getBoundingClientRect().top;
    var b = window.innerHeight / 1.3;

    if(pos < b){
        a.classList.add('divEffR');
    }
}

function maEffect2(){
    var c = document.querySelector('.eff2MA');
    var pos2 = c.getBoundingClientRect().top;
    var d = window.innerHeight / 1.3;

    if(pos2 < d){
        c.classList.add('divEffR');
    }
}

function maEffect3(){
    var e = document.querySelector('.eff3MA');
    var pos3 = e.getBoundingClientRect().top;
    var f = window.innerHeight / 1.3;

    if(pos3 < f){
        e.classList.add('divEffR');
    }
}

function maEffect4(){
    var g = document.querySelector(".eff4MA");
    var pos4 = g.getBoundingClientRect().top;
    var h = window.innerHeight / 1.3;

    if(pos4 < h){
        g.classList.add("divEffR2");
    }
}

function maEffect5(){
    var i = document.querySelector(".eff5MA");
    var pos5 = i.getBoundingClientRect().top;
    var j = window.innerHeight / 1.3;

    if(pos5 < j){
        i.classList.add("divEffR2");
    }
}

function maEffect6(){
    var k = document.querySelector(".eff6MA");
    var pos6 = k.getBoundingClientRect().top;
    var l = window.innerHeight / 1.3;

    if(pos6 < l){
        k.classList.add("divEffR2");
    }
}

function maEffect7(){
    var m = document.querySelector(".eff7MA");
    var pos7 = m.getBoundingClientRect().top;
    var n = window.innerHeight / 1.3;

    if(pos7 < n){
        m.classList.add("divEffR2");
    }
}

function maEffect8(){
    var o = document.querySelector(".eff8MA");
    var pos8 = o.getBoundingClientRect().top;
    var p = window.innerHeight / 1.3;

    if(pos8 < p){
        o.classList.add("divEffR2");
    }
}

window.addEventListener('scroll',maEffect1);
window.addEventListener('scroll',maEffect2);
window.addEventListener('scroll',maEffect3);
window.addEventListener('scroll',maEffect4);
window.addEventListener('scroll',maEffect5);
window.addEventListener('scroll',maEffect6);
window.addEventListener('scroll',maEffect7);
window.addEventListener('scroll',maEffect8);

// About us effects

function auEffect1(){
    var a1 = document.querySelector(".eff1AU");
    var posA1 = a1.getBoundingClientRect().top;
    var b1 = window.innerHeight / 1.3;

    if(posA1 < b1){
        a1.classList.add("divEffR3");
    }
}
function auEffect2(){
    var a2 = document.querySelector(".eff2AU");
    var posA2 = a2.getBoundingClientRect().top;
    var b1 = window.innerHeight / 1.3;

    if(posA2 < b1){
        a2.classList.add("divEffR3");
    }
}
function auEffect3(){
    var a3 = document.querySelector(".eff3AU");
    var posA3 = a3.getBoundingClientRect().top;
    var b3 = window.innerHeight / 2;

    if(posA3 < b3){
        a3.classList.add("divEffR3");
    }
}

window.addEventListener('load',auEffect1);
window.addEventListener('load',auEffect2);
window.addEventListener('scroll',auEffect3);


// home effects
function hEffect1(){
    var aa1 = document.querySelector('.eff1H');
    var posB1 = aa1.getBoundingClientRect().top;
    var bb1 = window.innerHeight / 1.3;

    if(posB1 < bb1){
        aa1.classList.add('divEffR');
    }
}
function hEffect2(){

    var aa2 = document.querySelector('.eff2H');
    if(aa2 !== null){
        var posB2 = aa2.getBoundingClientRect().top;
        var bb2 = window.innerHeight / 1.3;
    
        if(posB2 < bb2){
            aa2.classList.add('divEffR');
        }
    }

}
function hEffect3(){
    var aa3 = document.querySelector('.eff3H');
    var posB3 = aa3.getBoundingClientRect().top;
    var bb3 = window.innerHeight / 1.3;

    if(posB3 < bb3){
        aa3.classList.add('divEffR');
    }
}
function hEffect4(){
    var aa4 = document.querySelector('.eff4H');
    var posB4 = aa4.getBoundingClientRect().top;
    var bb4 = window.innerHeight / 1.3;

    if(posB4 < bb4){
        aa4.classList.add('divEffR');
    }
}
function hEffect5(){
    var aa5 = document.querySelector('.eff5H');
    var posB5 = aa5.getBoundingClientRect().top;
    var bb5 = window.innerHeight / 1.3;

    if(posB5 < bb5){
        aa5.classList.add('divEffR');
    }
}
function hEffect6(){
    var aa6 = document.querySelector('.eff6H');
    var posB6 = aa6.getBoundingClientRect().top;
    var bb6 = window.innerHeight / 1.3;

    if(posB6 < bb6){
        aa6.classList.add('divEffR');
    }
}
function hEffect7(){
    var aa7 = document.querySelector('.eff7H');
    var posB7 = aa7.getBoundingClientRect().top;
    var bb7 = window.innerHeight / 1.3;

    if(posB7 < bb7){
        aa7.classList.add('divEffR');
    }
}
function hEffect8(){
    var aa8 = document.querySelector('.eff8H');
    var posB8 = aa8.getBoundingClientRect().top;
    var bb8 = window.innerHeight / 1.3;

    if(posB8 < bb8){
        aa8.classList.add('divEffR');
    }
}
function hEffect9(){
    var aa9 = document.querySelector('.eff9H');
    var posB9 = aa9.getBoundingClientRect().top;
    var bb9 = window.innerHeight / 1.3;

    if(posB9 < bb9){
        aa9.classList.add('divEffR');
    }
}
function hEffect10(){
    var aa10 = document.querySelector('.eff10H');
    var posB10 = aa10.getBoundingClientRect().top;
    var bb10 = window.innerHeight / 1.3;

    if(posB10 < bb10){
        aa10.classList.add('divEffR');
    }
}
function hEffect11(){
    var aa11 = document.querySelector('.eff11H');
    var posB11 = aa11.getBoundingClientRect().top;
    var bb11 = window.innerHeight / 1.3;

    if(posB11 < bb11){
        aa11.classList.add('divEffR');
    }
}

window.addEventListener("scroll",hEffect1);
window.addEventListener("scroll",hEffect2);
window.addEventListener("scroll",hEffect3);
window.addEventListener("scroll",hEffect4);
window.addEventListener("scroll",hEffect5);
window.addEventListener("scroll",hEffect6);
window.addEventListener("scroll",hEffect7);
window.addEventListener("scroll",hEffect8);
window.addEventListener("scroll",hEffect9);
window.addEventListener("scroll",hEffect10);
window.addEventListener("scroll",hEffect11);


// get relaxed effect
function grEffect1(){
    var aaa1 = document.querySelector('.eff1GR');
    var posC1 = aaa1.getBoundingClientRect().top;
    var bbb1 = window.innerHeight / 1.3;

    if(posC1 < bbb1){
        aaa1.classList.add('divEffR');
    }
}
function grEffect2(){
    var aaa2 = document.querySelector('.eff2GR');
    var posC2 = aaa2.getBoundingClientRect().top;
    var bbb2 = window.innerHeight / 1.3;

    if(posC2 < bbb2){
        aaa2.classList.add('divEffR2');
    }
}
function grEffect3(){
    var aaa3 = document.querySelector('.eff3GR');
    var posC3 = aaa3.getBoundingClientRect().top;
    var bbb3 = window.innerHeight / 1.3;

    if(posC3 < bbb3){
        aaa3.classList.add('divEffR2');
    }
}
function grEffect4(){
    var aaa4 = document.querySelector('.eff4GR');
    var posC4 = aaa4.getBoundingClientRect().top;
    var bbb4 = window.innerHeight / 1.3;

    if(posC4 < bbb4){
        aaa4.classList.add('divEffR2');
    }
}
function grEffect5(){
    var aaa5 = document.querySelector('.eff5GR');
    var posC5 = aaa5.getBoundingClientRect().top;
    var bbb5 = window.innerHeight / 1.3;

    if(posC5 < bbb5){
        aaa5.classList.add('divEffR2');
    }
}
function grEffect6(){
    var aaa6 = document.querySelector('.eff6GR');
    var posC6 = aaa6.getBoundingClientRect().top;
    var bbb6 = window.innerHeight / 1.3;

    if(posC6 < bbb6){
        aaa6.classList.add('divEffR2');
    }
}

window.addEventListener("load",grEffect1);
window.addEventListener("load",grEffect2);
window.addEventListener("scroll",grEffect3);
window.addEventListener("scroll",grEffect4);
window.addEventListener("scroll",grEffect5);
window.addEventListener("scroll",grEffect6);
