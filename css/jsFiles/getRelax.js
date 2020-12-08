var sel1 = document.getElementById("selGR1");
var sel2 = document.getElementById("selGR2");
var sel3 = document.getElementById("selGR3");
var answer = document.getElementById("mdlG");
var btnG = document.getElementById("btnGR1");
var pG = document.getElementById("pG");
var btnClose = document.getElementById("btnClose");

btnG.addEventListener("click",()=>{
    let hdufnor = document.getElementById("hduf-nor");
    let hdufhap = document.getElementById("hduf-hap");
    let hdufang = document.getElementById("hduf-ang");
    let hdufdep = document.getElementById("hduf-dep");
    let hdufner = document.getElementById("hduf-ner");
    let hdufsad = document.getElementById("hduf-sad");

    let hoay10 = document.getElementById("hoay-10");
    let hoay18 = document.getElementById("hoay-18");
    let hoay35 = document.getElementById("hoay-35");  

    let cufspo = document.getElementById("cuf-spo");
    let cufmus = document.getElementById("cuf-mus");
    let cufmov = document.getElementById("cuf-mov");
    let cufmea = document.getElementById("cuf-mea");

    if(sel1.value === hdufnor.value && sel2.value === hoay10.value && sel3.value === cufspo.value ||
    sel1.value === hdufnor.value && sel2.value === hoay18.value && sel3.value === cufspo.value || 
    sel1.value === hdufnor.value && sel2.value === hoay35.value && sel3.value === cufspo.value){
        answer.style.display = "flex";
        pG.innerHTML = "We advice you to do a <span class='spnGR'>running sport</span>, or <span class='spnGR'>walking in nature</span> places like forest, because that will improve "+
         "your mood so much the result of inhale the fresh air of nature which contributes to the production of the hormone serotonin, ";+
         "and this harmone is the responsible for happiness.";
    }
    else if(sel1.value === hdufnor.value && sel2.value === hoay10.value && sel3.value === cufmus.value ||
        sel1.value === hdufnor.value && sel2.value === hoay18.value && sel3.value === cufmus.value || 
        sel1.value === hdufnor.value && sel2.value === hoay35.value && sel3.value === cufmus.value){
            answer.style.display = "flex";
            pG.innerHTML = "When you feel normal, it's enaugh for you to listen to <span class='spnGR'>your favourite music</span>, your mood will change to"+
            " the best by indirect way the result of doing what you wanna do !";
    }
    else if(sel1.value === hdufnor.value && sel2.value === hoay10.value && sel3.value === cufmov.value ||
        sel1.value === hdufnor.value && sel2.value === hoay18.value && sel3.value === cufmov.value || 
        sel1.value === hdufnor.value && sel2.value === hoay35.value && sel3.value === cufmov.value){
            answer.style.display = "flex";
            pG.innerHTML = "We advice you to watch any movie of <span class='spnGR'>action</span>, <span class='spnGR'>adventure</span>,"+
            " <span class='spnGR'>comedy</span>, <span class='spnGR'>fantasy</span>, <span class='spnGR'>history</span>, <span class='spnGR'>romance</span>,"+
            " <span class='spnGR'>war</span>, just avoid <span class='spnGR1'>crime</span>, <span class='spnGR1'>horror</span>,"+
            " because the possibility of changing your mood to bad is to big.";
    }
    else if(sel1.value === hdufnor.value && sel2.value === hoay10.value && sel3.value === cufmea.value ||
        sel1.value === hdufnor.value && sel2.value === hoay18.value && sel3.value === cufmea.value || 
        sel1.value === hdufnor.value && sel2.value === hoay35.value && sel3.value === cufmea.value){
            answer.style.display = "flex";
            pG.innerHTML = "You must know that food can controler your mood, can make it bad or good, in this situation we suggest to you"+
            " to eat <span class='spnGR'>the sweet meals</span> like <span class='spnGR'>chocolat</span>, <span class='spnGR'>icecream</span>..."+
            " in addition to <span class='spnGR'>fruits </span>like <span class='spnGR'>bananas&berries</span>... because those meals"+
            " can make you produce a lot of happiness hormones like Serotonin, Tryptophane.";
    }
    else if(sel1.value === hdufhap.value && sel2.value === hoay10.value && sel3.value === cufspo.value ||
        sel1.value === hdufhap.value && sel2.value === hoay18.value && sel3.value === cufspo.value || 
        sel1.value === hdufhap.value && sel2.value === hoay35.value && sel3.value === cufspo.value){
            answer.style.display = "flex";
            pG.innerHTML = "When you're happy <span class='spnGR'>all sport</span> is perfect for you, there's no excepting in this situation, beacause you're already0"+
            "feel happy, enjoy!";
    }
    else if(sel1.value === hdufhap.value && sel2.value === hoay10.value && sel3.value === cufmus.value ||
        sel1.value === hdufhap.value && sel2.value === hoay18.value && sel3.value === cufmus.value || 
        sel1.value === hdufhap.value && sel2.value === hoay35.value && sel3.value === cufmus.value){
            answer.style.display = "flex";
            pG.innerHTML = "Just avoid to listening to <span class='spnGR1'>sad music</span>, by indirect way you'll feel depressed, because "+
            "your brain easily affects your heart according to what happend around us, and we know that heart is the responsible for our feelings to be good or not.";
    }
    else if(sel1.value === hdufhap.value && sel2.value === hoay10.value && sel3.value === cufmov.value ||
        sel1.value === hdufhap.value && sel2.value === hoay18.value && sel3.value === cufmov.value || 
        sel1.value === hdufhap.value && sel2.value === hoay35.value && sel3.value === cufmov.value){
            answer.style.display = "flex";
            pG.innerHTML = "<span class='spnGR'>Action</span>, <span class='spnGR'>romance</span>, <span class='spnGR'>comedy</span>, "+
            "<span class='spnGR'>fantasy</span> and <span class='spnGR'>adventure</span> movies, I'll give you just one advice, read the story "+
            "of the movie beafore watching it, just because a lot of movies have sad or bad finition, so that can change your mood to the anger "+
            "for example if you won't like the end of this movie.";
    }
    else if(sel1.value === hdufhap.value && sel2.value === hoay10.value && sel3.value === cufmea.value ||
        sel1.value === hdufhap.value && sel2.value === hoay18.value && sel3.value === cufmea.value || 
        sel1.value === hdufhap.value && sel2.value === hoay35.value && sel3.value === cufmea.value){
            answer.style.display = "flex";
            pG.innerHTML = "You're happy, well! the only thing you need right now is energy to start your activites (anything you want to do)"+
            "for that we advice you to <span class='spnGR'>eat meals that have a lot of sugar</span>, due to sugar give us energy.";
    }
    else if(sel1.value === hdufang.value && sel2.value === hoay10.value && sel3.value === cufspo.value ||
        sel1.value === hdufang.value && sel2.value === hoay18.value && sel3.value === cufspo.value || 
        sel1.value === hdufang.value && sel2.value === hoay35.value && sel3.value === cufspo.value){
            answer.style.display = "flex";
            pG.innerHTML = "Anger is a bad feeling inside us, the best way to push this feeling out is by playing <span class='spnGR'>boxing sport</span>,"+
            " or any other <span class='spnGR'>fighting sport</span>, because you'll push this bad feeling out by hitting the boxing bag for example.";
    }
    else if(sel1.value === hdufang.value && sel2.value === hoay10.value && sel3.value === cufmus.value ||
        sel1.value === hdufang.value && sel2.value === hoay18.value && sel3.value === cufmus.value || 
        sel1.value === hdufang.value && sel2.value === hoay35.value && sel3.value === cufmus.value){
            answer.style.display = "flex";
            pG.innerHTML = "<span class='spnGR'>Slow music</span> is from the best ways to get rid of anger, after listening this kind "+
            "of music for a little time you'll notice the difference, your mood will change to the best.";
    }
    else if(sel1.value === hdufang.value && sel2.value === hoay10.value && sel3.value === cufmov.value ||
        sel1.value === hdufang.value && sel2.value === hoay18.value && sel3.value === cufmov.value || 
        sel1.value === hdufang.value && sel2.value === hoay35.value && sel3.value === cufmov.value){
            answer.style.display = "flex";
            pG.innerHTML = "We advice you to watch <span class='spnGR'>sience fiction movies</span> or <span class='spnGR'>documentary movies</span>"+
            " when you be angry, why not <span class='spnGR1'>action</span>, <span class='spnGR1'>comedy</span>, <span class='spnGR1'>romance ...</span>"+
            "because peoples when being angry they dont care about those kind of movies, they need the movies to be focus with it to fortget their anger.";
    }
    else if(sel1.value === hdufang.value && sel2.value === hoay10.value && sel3.value === cufmea.value ||
        sel1.value === hdufang.value && sel2.value === hoay18.value && sel3.value === cufmea.value || 
        sel1.value === hdufang.value && sel2.value === hoay35.value && sel3.value === cufmea.value){
            answer.style.display = "flex";
            pG.innerHTML = "Eat <span class='spnGR'>Oats</span>, because Oats frees up energy which inside you, also eat <span class='spnGR'>blue fishes</span>"+
            " like <span class='spnGR'>Salmon</span> and <span class='spnGR'>Sardines</span>, due to DHA fatty acid,"+
            " it helps electrical signals in the brain to pass easily, so you can keep your relaxing for a long time.";
    }
    else if(sel1.value === hdufdep.value && sel2.value === hoay10.value && sel3.value === cufspo.value ||
        sel1.value === hdufdep.value && sel2.value === hoay18.value && sel3.value === cufspo.value || 
        sel1.value === hdufdep.value && sel2.value === hoay35.value && sel3.value === cufspo.value){
            answer.style.display = "flex";
            pG.innerHTML = "When you get depressed you should <span class='spnGR'>go out to the nature places</span> like <span class='spnGR'>forst</span>, "+
            "there's a lot of sport that you can do in the forest like <span class='spnGR'>running sport</span>, <span class='spnGR'>walking</span> "+
            "or <span class='spnGR'>workout</span>... due to the fresh air of nature help you to change your mood to be better, the result of "+
            "your body produce a lot of hormone serotonin. We advice you about <span class='spnGR'>swimming </span>too, "+
            "it will help you to improve your mood to the best.";
    }
    else if(sel1.value === hdufdep.value && sel2.value === hoay10.value && sel3.value === cufmus.value ||
        sel1.value === hdufdep.value && sel2.value === hoay18.value && sel3.value === cufmus.value || 
        sel1.value === hdufdep.value && sel2.value === hoay35.value && sel3.value === cufmus.value){
            answer.style.display = "flex";
            pG.innerHTML = "The only advide i should give you in this situation is <span class='spnGR'>electronic dance music</span>, by indirect way "+
            "your mood will change, this is the magic of this kind of music, give you a lot of energy and make the depressed left you.";
    }
    else if(sel1.value === hdufdep.value && sel2.value === hoay10.value && sel3.value === cufmov.value ||
        sel1.value === hdufdep.value && sel2.value === hoay18.value && sel3.value === cufmov.value || 
        sel1.value === hdufdep.value && sel2.value === hoay35.value && sel3.value === cufmov.value){
            answer.style.display = "flex";
            pG.innerHTML = "Depressed is the result of bad/sad things or shock happened with you, and now you must forget about those "+
            "feelings, In my opnion you need to watch <span class='spnGR'>drama</span>, <span class='spnGR'>crime</span> or <span class='spnGR'>investigation</span>"+
            " movies, why? just because you'll be focus with this kinf of movies, then you'll forget about depressed.";
    }
    else if(sel1.value === hdufdep.value && sel2.value === hoay10.value && sel3.value === cufmea.value ||
        sel1.value === hdufdep.value && sel2.value === hoay18.value && sel3.value === cufmea.value || 
        sel1.value === hdufdep.value && sel2.value === hoay35.value && sel3.value === cufmea.value){
            answer.style.display = "flex";
            pG.innerHTML = "You should eat <span class='spnGR'>chocolat</span> to improve your mood, due to phenylethylamine acid, it's a "+
            "substance that leads you to a feeling of euphoria, in addition to hormone serotonin, happiness hormone.";
    }
    else if(sel1.value === hdufner.value && sel2.value === hoay10.value && sel3.value === cufspo.value ||
        sel1.value === hdufner.value && sel2.value === hoay18.value && sel3.value === cufspo.value || 
        sel1.value === hdufner.value && sel2.value === hoay35.value && sel3.value === cufspo.value){
            answer.style.display = "flex";
            pG.innerHTML = "If you dont wanna be nervous anymore, you can play the <span class='spnGR'>chess</span>, beacause this game "+
            "can calm you down. You can do <span class='spnGR'>yoga</span> too, it's a cure for stress anyway.";
    }
    else if(sel1.value === hdufner.value && sel2.value === hoay10.value && sel3.value === cufmus.value ||
        sel1.value === hdufner.value && sel2.value === hoay18.value && sel3.value === cufmus.value || 
        sel1.value === hdufner.value && sel2.value === hoay35.value && sel3.value === cufmus.value){
            answer.style.display = "flex";
            pG.innerHTML = "We suggest to you to listen to <span class='spnGR'>calm music</span> like piano for example, you're nervous and "+
            "you need to calm down, this kind of music will help you.";
    }
    else if(sel1.value === hdufner.value && sel2.value === hoay10.value && sel3.value === cufmov.value ||
        sel1.value === hdufner.value && sel2.value === hoay18.value && sel3.value === cufmov.value || 
        sel1.value === hdufner.value && sel2.value === hoay35.value && sel3.value === cufmov.value){
            answer.style.display = "flex";
            pG.innerHTML = "The only advice i should give you in this situation is to <span class='spnGR'>read the story of movie before watching it</span>, "+
            "if you love the story you'll love movie, then you'll calm down and the stress will left you.";
    }
    else if(sel1.value === hdufner.value && sel2.value === hoay10.value && sel3.value === cufmea.value ||
        sel1.value === hdufner.value && sel2.value === hoay18.value && sel3.value === cufmea.value || 
        sel1.value === hdufner.value && sel2.value === hoay35.value && sel3.value === cufmea.value){
            answer.style.display = "flex";
            pG.innerHTML = "All thise food that you'll see can help you from stress : <span class='spnGR'>Spinach</span>, "+
            "<span class='spnGR'>Avocado</span>, <span class='spnGR'>Tea</span>, <span class='spnGR'>Milk</span>, "+
            "<span class='spnGR'>Apple</span>, <span class='spnGR'>black or red Berrie</span>, and the food which have "+
            "<span class='spnGR'>Omega3</span>.";
    }
    else if(sel1.value === hdufsad.value && sel2.value === hoay10.value && sel3.value === cufspo.value ||
        sel1.value === hdufsad.value && sel2.value === hoay18.value && sel3.value === cufspo.value || 
        sel1.value === hdufsad.value && sel2.value === hoay35.value && sel3.value === cufspo.value){
            answer.style.display = "flex";
            pG.innerHTML = "<span class='spnGR'>All kinds of sport</span> will push the sadness out, especially the "+
            "<span class='spnGR'>team sport</span> like <span class='spnGR'>soccer</span>, <span class='spnGR'>basketball</span>...";
    }
    else if(sel1.value === hdufsad.value && sel2.value === hoay10.value && sel3.value === cufmov.value ||
        sel1.value === hdufsad.value && sel2.value === hoay18.value && sel3.value === cufmov.value || 
        sel1.value === hdufsad.value && sel2.value === hoay35.value && sel3.value === cufmov.value){
            answer.style.display = "flex";
            pG.innerHTML = "All we know comedy is the opposite of sadness, the best solution now is to watch <span class='spnGR'>comedian movie</span>, "+
            "but I advice you to avoid movies that have bloody scenes, maybe you'll be sad more.";
    }
    else if(sel1.value === hdufsad.value && sel2.value === hoay10.value && sel3.value === cufmus.value ||
        sel1.value === hdufsad.value && sel2.value === hoay18.value && sel3.value === cufmus.value || 
        sel1.value === hdufsad.value && sel2.value === hoay35.value && sel3.value === cufmus.value){
            answer.style.display = "flex";
            pG.innerHTML = "You should listen to <span class='spnGR'>loud music</span>, like <span class='spnGR'>electronic dance music</span>, "+
            "<span class='spnGR'>metal</span>...";
    }
    else if(sel1.value === hdufsad.value && sel2.value === hoay10.value && sel3.value === cufmea.value ||
        sel1.value === hdufsad.value && sel2.value === hoay18.value && sel3.value === cufmea.value || 
        sel1.value === hdufsad.value && sel2.value === hoay35.value && sel3.value === cufmea.value){
            answer.style.display = "flex";
            pG.innerHTML = "I'll give you now the name of food which help our bodies to produces a lot of happiness hormones like serotonin, "+
            "dobamin ... and this food is : <span class='spnGR'>Chocolat</span>, <span class='spnGR'>Spinach</span>, "+
            "<span class='spnGR'>Avocado</span>, fruits like <span class='spnGR'>berries</span> and <span class='spnGR'>bananas</span>, "+
            "<span class='spnGR'>Starches</span> and more, you can search in google about those hormones you'll get a lot of answears.";
    }
    else{
        alert("Please select your answers");
    }

})

btnClose.addEventListener("click",()=>{
    answer.style.display = "none";
})