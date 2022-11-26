"use strict"

document.addEventListener("scroll", (event) => {
  (window.scrollY > 1) ? menuToFixed() : menuToNoFixed();
});

function menuToFixed(){
    let menu = document.getElementById("menu");
    let space = document.getElementById("space-before-banner");
    menu.classList.add("fixed-top");
    menu.classList.add("bg-primary");
    menu.classList.add("border-bottom");
    space.classList.replace("d-none", "d-block");
}

function menuToNoFixed(){
    let menu = document.getElementById("menu");
    let space = document.getElementById("space-before-banner");
    menu.classList.remove("fixed-top");
    menu.classList.remove("bg-primary");
    menu.classList.remove("border-bottom");
    space.classList.replace("d-block", "d-none");
}