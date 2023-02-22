const hamBurger = document.querySelector(".ham");
const hamClose = document.querySelector(".close");
const Body = document.querySelector("body");
const mobileMenu = document.querySelector(".mobile_menu");

hamBurger.addEventListener("click", () => {
  console.log("click");
  Body.classList.add("fade-in");
  hamBurger.classList.add("d-n");
  hamClose.classList.remove("d-n");
  mobileMenu.classList.remove("d-n");
});

hamClose.addEventListener("click", () => {
  Body.classList.remove("fade-in");
  hamClose.classList.add("d-n");
  hamBurger.classList.remove("d-n");
  mobileMenu.classList.add("d-n");
});
