
// marquee Silder

var elements = $('ul.marquee-item-list li').length;
for(var i=0;i < elements; i++){
 $(".marquee-item-list").clone().prependTo( ".marquee-block" );
};
var liEle = [];
var liEle = $(".marquee-item-list li");



// Category  Carousel

$('.category').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:1600,
    responsive:{
        0:{ items:1 },
        600:{ items:3 },
        1000:{ items:6 }
    }
});

// Products Silder Carousel

$('.products-silder').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:1600,
    responsive:{
        0:{ items:1 },
        600:{ items:3 },
        1000:{ items:4 }
    }
});


// Instagram Feed Carousel

$('#instagram').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:1600,
    responsive:{
        0:{ items:1 },
        600:{ items:3 },
        1000:{ items:5 }
    }
});

