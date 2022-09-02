// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const navCenter = document.querySelector(".nav-center");

navToggle.addEventListener("click", function (e) {
  const navBtn = e.target.closest(".nav-toggle");
  if (navBtn) {
    links.classList.toggle("show-links");
  }
});
