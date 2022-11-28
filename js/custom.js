"use strict"

document.addEventListener("scroll", (event) => {
  (window.scrollY > 1) ? menuTransition() : menuNoTransition();
});

function menuTransition(){
  try {
    let menu = document.getElementById("menu");
    menu.classList.add("bg-primary");
    menu.classList.add("border-bottom");
    menu.classList.replace("py-4", "py-2");
  } catch (error) {
    console.log(error);
  }
  try {
    let menuForm = document.getElementById("menuForm");
    menuForm.classList.add("border-bottom");
    menuForm.classList.replace("py-4", "py-2");
  } catch (error) {
    console.log(error);
  }
}

function menuNoTransition(){
  try {
    let menu = document.getElementById("menu");
    menu.classList.remove("bg-primary");
    menu.classList.remove("border-bottom");
    menu.classList.replace("py-2", "py-4");
  } catch (error) {
    console.log(error);
  }
  try {
    let menuForm = document.getElementById("menuForm");
    menuForm.classList.remove("border-bottom");
    menuForm.classList.replace("py-2", "py-4");
  } catch (error) {
    console.log(error);
  }
}