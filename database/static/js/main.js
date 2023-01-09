var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  center: true,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },

    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

$(function () {
  $(document).scroll(function () {
    let $nav = $("nav");
    if ($(this).scrollTop() > $nav.height()) {
      $nav.removeClass("navbar-dark").addClass("navbar-light bg-light shadow");
      $(".navbar-brand").addClass("text-success");
    } else {
      $nav.removeClass("navbar-light bg-light shadow").addClass("navbar-dark");
      $(".navbar-brand").removeClass("text-success");
    }
  });
});

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
