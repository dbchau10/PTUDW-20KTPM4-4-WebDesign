var owl =$('.owl-carousel')
owl.owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    center: true,
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },

        780: {
            items: 3
        },
        1000:{
            items:4
        }
    }
})