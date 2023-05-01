var navItems = document.querySelectorAll(".nav-item");
var preloader = document.getElementById("loading");
var load = document.getElementById("load");

var link2 = document.getElementsByClassName("link-2")[0];
var link3 = document.getElementsByClassName("link-3")[0];
var link4 = document.getElementsByClassName("link-4");
var link5 = document.getElementsByClassName("link-5");
var id1   = document.getElementById("gallery-replace");

var mouseover = document.querySelectorAll(".mouseover");
var textWrapper = document.querySelectorAll(".text-wrapper");
var mouseImg = document.querySelectorAll(".gallery img");

var nav   = document.querySelector("#Nav-1");
var frame = document.querySelector(".margin-1");
var nav2  = document.querySelector("#img-1 nav");

 var gallery = document.getElementsByClassName("gallery")[0];
 var img1    = document.getElementsByClassName("img-gallery-1")[0];
 var img2    = document.getElementsByClassName("img-gallery-2")[0];
 var img3    = document.getElementsByClassName("img-gallery-3")[0];
 var img4    = document.getElementsByClassName("img-gallery-4")[0];
 var img5    = document.getElementsByClassName("img-gallery-5")[0];
 var img6    = document.getElementsByClassName("img-gallery-6")[0];
 var img7    = document.getElementsByClassName("img-gallery-7")[0];

var ul = document.querySelector(".ul");
var a = document.querySelectorAll(".link");

a.forEach(el => {
  el.addEventListener('click', function() {
     ul.querySelector('.active').classList.remove('active');

     el.classList.add('active');
  });
});



frame.addEventListener("click", function(){
  nav.remove();
  nav2.style.paddingTop = "1em"
});

function myFunction(){
  // load.setAttribute("style", "opacity: 1; transition: all 1000ms;");
  preloader.style.display = "none";
}


window.addEventListener("scroll", function(){
    var header = document.querySelector("#img-1 nav");
    header.classList.toggle("Nav-scroll", window.scrollY > 0);
});





 textWrapper.forEach( o => {
  o.addEventListener("mouseover", () => {
     mouseImg.forEach(i => {
       i.style.transition = "all 5s";
      })
   });
 });

textWrapper.forEach( o => {
   o.addEventListener("mouseout", () => {
     mouseImg.forEach(i => {
      i.style.transition = "all .4s ease-in-out";
     })   
   });
});
  


function  blinkClick() {
  gallery.style.removeProperty("grid-template");
  // come back and look at this above
  
  id1.classList.add("gallery");
  id1.classList.remove("gallery-replace");
  id1.classList.remove("gallery-replace-2");
  id1.classList.remove("gallery-replace-3");

    img1.style.removeProperty("animation")
    img1.setAttribute("style", "animation: fadein 0.40s ease-out normal;");

    img2.style.removeProperty("animation");
    img2.setAttribute("style", "animation: fadein 0.40s ease-out normal;");
    img2.classList.remove("img2-furniture");

    img3.setAttribute("style", "animation: fade-out-in 0.40s ease-out backwards;");

    img4.style.removeProperty("display");
    img4.setAttribute("style", "animation: fadein 0.40s ease-out normal;");

    img5.style.removeProperty("display");
    img5.setAttribute("style", "animation: fadein 0.40s ease-out normal;");

    img6.style.removeProperty("display");
    img6.setAttribute("style", "animation: fadein 0.40s ease-out normal;");

    img7.setAttribute("style", "animation: fade-out-in 0.40s ease-out backwards;");
    gallery.removeAttribute("style", "grid-template-rows: repeat(4, 15%);");

    img1.classList.remove("img1");
    img7.classList.remove("img7");
    img3.classList.remove("img3"); 
    img2.classList.remove("img2-print");
    img3.classList.remove("img3-furniture");
    img7.classList.remove("img7-furniture");
    img7.classList.remove("img7-print");

    img6.classList.remove("img6-print")
}


function linkClick() {
  img1.style.removeProperty("animation")
  img1.classList.add("img1");
  img3.classList.add("img3");
  img2.classList.remove("img2-print");
  img6.classList.remove("img6-print")
  img7.classList.add("img7");
  img7.classList.remove("img7-print");
  img7.classList.remove("img7-furniture");
  img3.classList.remove("img3-furniture");

  img3.setAttribute("style", "animation-delay: 100ms;");
  img7.setAttribute("style", "animation-delay: 300ms;");
  
  id1.classList.remove("gallery");
  id1.classList.add("gallery-replace");
  id1.classList.remove("gallery-replace-2");
  id1.classList.remove("gallery-replace-3");
  img1.setAttribute("style", "animation: fadein 0.40s ease-out normal backwards;");
    img2.setAttribute("style", "animation: fadeout 0.20s forwards;");
    img4.setAttribute("style", "animation: fadeout 0.20s forwards;");
    img5.setAttribute("style", "animation: fadeout 0.20s forwards;");
    img6.setAttribute("style", "animation: fadeout 0.20s forwards;");
}



function linkTwo() {
  img1.setAttribute("style", "animation: fadeout 0.20s forwards;");
   img2.classList.remove("img2-print");
   img3.classList.remove("img3");
   img7.classList.remove("img7");
   img6.classList.remove("img6-print")
   img3.classList.add("img3-furniture");
   img7.classList.add("img7-furniture");
   img7.classList.remove("img7-print");
   img2.classList.add("img2-furniture");

  img3.setAttribute("style", "animation: fadein 0.40s ease-out normal backwards;");
  img7.setAttribute("style", "animation: fadein 0.40s ease-out normal backwards;");

   id1.classList.remove("gallery");
   id1.classList.remove("gallery-replace");
   id1.classList.remove("gallery-replace-3");
   id1.classList.add("gallery-replace-2");

     img2.setAttribute("style", "animation: fadein 0.40s ease-out normal;");
     
    img4.setAttribute("style", "animation: fadeout 0.20s forwards;");
    img5.setAttribute("style", "animation: fadeout 0.20s forwards;");
    img6.setAttribute("style", "animation: fadeout 0.20s forwards;");
}


function linkThree() {
  
  img3.classList.remove("img3");
  img7.classList.remove("img7");
  img3.classList.remove("img3-furniture");
  img7.classList.remove("img7-furniture");
  img7.classList.add("img7-print");
  img2.classList.remove("img2-furniture");
  img2.classList.add("img2-print");
  img6.classList.add("img6-print")

 
 img7.setAttribute("style", "animation: fadein 0.40s ease-out normal backwards;");

  id1.classList.remove("gallery");
  id1.classList.remove("gallery-replace");
  id1.classList.remove("gallery-replace-2");
  id1.classList.add("gallery-replace-3");

   img2.setAttribute("style", "animation: fadein 0.40s ease-out normal backwards;");
   img6.setAttribute("style", "animation: fadein 0.40s ease-out normal backwards;");

   img1.setAttribute("style", "animation: fadeout 0.20s forwards;");
   img3.setAttribute("style", "animation: fadeout 0.20s forwards;"); 
   img4.setAttribute("style", "animation: fadeout 0.20s forwards;");
   img5.setAttribute("style", "animation: fadeout 0.20s forwards;");
   
}



