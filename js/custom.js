"use strict"

document.addEventListener("scroll", (event) => {
  (window.scrollY > 1) ? menuToFixed() : menuToNoFixed();
});

function menuToFixed(){
    let menu = document.getElementById("menu");
    let space = document.getElementById("space-before-banner");
    menu.classList.add("bg-primary");
    menu.classList.add("border-bottom");
    menu.classList.replace("py-4", "py-2");
}

function menuToNoFixed(){
    let menu = document.getElementById("menu");
    let space = document.getElementById("space-before-banner");
    menu.classList.remove("bg-primary");
    menu.classList.remove("border-bottom");
    menu.classList.replace("py-2", "py-4");
}