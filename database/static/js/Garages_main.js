const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let offcanvas = $(".navbar-toggler");
// const $nav = $("nav");
// offcanvas.addEventListener("click", canvasHandling);

offcanvas.onclick = canvasHandling;

function canvasHandling(e) {
  let $nav = $("nav");
  $nav.classList.remove("navbar-light");
  $nav.classList.remove("bg-light");
  $nav.classList.remove("shadow");
  $nav.classList.add("navbar-dark");
}

let close = $(".btn-close");
// close.addEventListener("click", closeHandler);

close.onclick = closeHandler;

function closeHandler(e) {
  let $nav = $("nav");
  $nav.classList.remove("navbar-dark");
  $nav.classList.add("navbar-light");
  $nav.classList.add("bg-light");
  $nav.classList.add("shadow");
}
