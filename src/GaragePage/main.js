let offcanvas = document.querySelector(".navbar-toggler");
  offcanvas.addEventListener('click', canvasHandling);

  function canvasHandling(e){
    e.preventDefault();
    let $nav = $("nav");
    $nav.removeClass('navbar-light bg-light shadow').addClass('navbar-dark');

  }

  let close = document.querySelector(".btn-close");
  close.addEventListener('click', closeHandler);

  function closeHandler(e){
    e.preventDefault();
    let $nav = $("nav");
    $nav.removeClass('navbar-dark').addClass('navbar-light bg-light shadow');
    }