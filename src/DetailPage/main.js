const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let offcanvas = document.querySelector(".navbar-toggler");
offcanvas.addEventListener("click", canvasHandling);

function canvasHandling(e) {
  e.preventDefault();
  let $nav = $("nav");
  $nav.removeClass("navbar-light bg-light shadow").addClass("navbar-dark");
}

let close = document.querySelector(".btn-close");
close.addEventListener("click", closeHandler);

function closeHandler(e) {
  e.preventDefault();
  let $nav = $("nav");
  $nav.removeClass("navbar-dark").addClass("navbar-light bg-light shadow");
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
handleChooseBtn();
