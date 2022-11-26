var owl =$('.owl-carousel')
owl.owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    pageDots: false,
    wrapAround: true,
    autoPlay: 1000

  });