const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navItems = $$(".main__nav-item");
const mainContainers = $$(".main__container");
const mainFooters = $$(".main__footer");

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
