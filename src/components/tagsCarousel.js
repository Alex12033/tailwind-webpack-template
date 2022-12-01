"use strict";

"use strict";

function manageMenu() {
  let allTags = document.querySelector(".all-tags");

  let left = document.querySelector(".arrow-left");
  let right = document.querySelector(".arrow-right");

  let test = 0;
  right.addEventListener("click", (e) => {
    allTags.scrollLeft += 100;
  });

  left.addEventListener("click", (e) => {
    allTags.scrollLeft -= 100;
  });
}

module.exports = manageMenu;
