// let offcanvas = document.querySelector(".navbar-toggler");
//   offcanvas.addEventListener('click', canvasHandling);

//   function canvasHandling(e){
//     e.preventDefault();
//     let nav = document.querySelector("nav");
//     console.log(nav);
//     console.log(nav.classList);
//     nav.classList.remove('navbar-light');
//     nav.classList.remove('bg-light');
//     nav.classList.remove('shadow');
//     nav.classList.add('navbar-dark');

//   }

//   let close = document.querySelector(".btn-close");
//   close.addEventListener('click', closeHandler);

//   function closeHandler(e){
//     e.preventDefault();
//     let nav = document.querySelector("nav");
//     // nav.removeClass('navbar-dark').addClass('navbar-light bg-light shadow');

//     nav.classList.remove('navbar-dark');
//     nav.classList.add('navbar-light');
//     nav.classList.add('bg-light');
//     nav.classList.add('shadow');
//     }

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