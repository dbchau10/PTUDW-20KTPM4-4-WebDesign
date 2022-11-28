var owl =$('.owl-carousel')
owl.owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:true,
    center: true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout: 1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },

        992: {
            items: 3
        },
        1200:{
            items:4
        }
    }
})