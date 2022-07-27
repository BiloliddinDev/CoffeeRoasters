const menu = document.querySelector(".header__nav");
const button = document.querySelector(".header__menu");

button.addEventListener("click", () => {
  menu.classList.toggle("header__nav--open");
});
