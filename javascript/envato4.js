var nav   = document.querySelector("#Nav-1");
var frame = document.querySelector(".margin-1");
var nav2  = document.querySelector("#bg-1 nav");
var preloader = document.getElementById("loading");


var fade = document.querySelector("#bg-4 .fade:nth-of-type(2)");
var tab = document.querySelector(".tab-pane:nth-of-type(1)");
var fade2 = document.querySelector("#bg-4 .fade:nth-of-type(3)");
var fade3 = document.getElementById("fade3");
var fade4 = document.getElementById("fade4");

// var button1 = document.querySelector(".button-group button:nth-of-type(1)");
// var button2 = document.querySelector(".button-group button:nth-of-type(2)");
// var button3 = document.querySelector(".button-group button:nth-of-type(3)");
// var button4 = document.querySelector(".button-group button:nth-of-type(4)");
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2")
var h3 = document.getElementById("h3");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

frame.addEventListener("click", function(){
     nav.remove();
     nav2.style.paddingTop = "1em";
});

function myFunction(){
    preloader.style.display = "none";
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("#bg-1 nav");
    header.classList.toggle("Nav-scroll", window.scrollY > 0);
});

