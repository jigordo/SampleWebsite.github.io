var preloader = document.getElementById("loading");
var load = document.getElementById("load");

var nav   = document.querySelector("#Nav-1");
var frame = document.querySelector(".margin-1");
var nav2  = document.querySelector("#bg-1 nav");

frame.addEventListener("click", function(){
     nav.remove();
     nav2.style.paddingTop = "1em";
});

function myFunction() {
    preloader.style.display = "none";
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("#bg-1 nav");
    header.classList.toggle("Nav-scroll", window.scrollY > 0);
});