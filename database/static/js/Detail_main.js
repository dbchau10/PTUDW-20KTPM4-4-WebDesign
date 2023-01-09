// navbar-light bg-light shawdow
// navbar-dark

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

function handleModalPayMent() {
  const navItems = $$(".main__nav-item");
  const mainContainers = $$(".main__container");
  const mainFooters = $$(".main__footer");
  const closeIcon = $(".modal__close-icon");
  const modal = $(".modal");

  Array.from(navItems).forEach((navItem, index) => {
    navItem.onclick = () => {
      const navItemActive = $(".main__nav-item.active");
      const mainContainerActive = $(".main__container.active");
      const mainFooterActive = $(".main__footer.active");

      navItemActive.classList.remove("active");
      mainContainerActive.classList.remove("active");
      mainFooterActive.classList.remove("active");

      navItems[index].classList.add("active");
      mainContainers[index].classList.add("active");
      mainFooters[index].classList.add("active");
    };
  });

  const backTexts = $$(".back-text");
  Array.from(backTexts).forEach((backText, index) => {
    backText.onclick = () => {
      index;
      const navItemActive = $(".main__nav-item.active");
      const mainContainerActive = $(".main__container.active");
      const mainFooterActive = $(".main__footer.active");

      navItemActive.classList.remove("active");
      mainContainerActive.classList.remove("active");
      mainFooterActive.classList.remove("active");

      navItems[index].classList.add("active");
      mainContainers[index].classList.add("active");
      mainFooters[index].classList.add("active");
    };
  });

  closeIcon.onclick = () => {
    modal.style.display = "none";
  };
}

function handleChooseBtn() {
  const modal = $(".modal");
  modal.style.display = "block";
}

handleModalPayMent();
