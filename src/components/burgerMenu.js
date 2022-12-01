"use strict";

function manageMenu() {
  let menuBtn = document.querySelector(".burger-btn");
  let asideBar = document.querySelector(".aside-bar");

  let arrowLeft = document.querySelector(".arrow-left");

  //initial tagline position
  let tagLine = document.querySelector(".all-tags");
  tagLine.style.marginLeft = "255px";

  menuBtn.addEventListener("click", () => {
    asideBar.classList.toggle("active");

    //to display menu
    asideBar.style.opacity = 1;
    asideBar.style.transform = "translate(0px, 0px)";

    if (!asideBar.classList.contains("active")) {
      //hide menu
      asideBar.style.opacity = 0;
      asideBar.style.transform = "translate(-220px, 0px)";
      
      //change position left arrow when menu close
      arrowLeft.style.left = "0px";

      tagLine.style.marginLeft = "0px";
      return;
    }

    //back tagline to initial position
    tagLine.style.marginLeft = "255px";

    //back left arrow in initial position when menu open
    arrowLeft.style.left = "250px";
  });
}

module.exports = manageMenu;