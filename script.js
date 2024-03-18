const menu = document.querySelector(".bars");
const addClass = document.querySelector(".menu");

menu.addEventListener("click", function () {
  addClass.classList.toggle("show");
});
