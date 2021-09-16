$(".yellow").click(function(){
  $(".style").attr("href","css/yellow.css")
});
$(".red").click(function(){
  $(".style").attr("href","css/style.css")
});

$(".banner-slider").slick({
  arrows: true,
  dots: true,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]
});



// banner end 

$('.venobox').venobox(); 


// team part 
$(".team-slider").slick({
  arrows: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }]

});

// testimonial part

$(".testi-slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }]
 
});

// counter up

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// routine part 
$("#colorful").colorfulTab(); 

//  marketplace part

$(".market-slider").slick({
  arrows: false,
  dots: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }]

});