$(document).ready(function () {
    $('.nowshowing-owl').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      items: 3,
      responsive: {
        320: {
          items: 1,
          nav: false,
		  center: true,
          
        },
        700: {
          items: 2,
		  nav: false,
		  center: false,
          
        },
        1000: {
          items: 2,
          nav: true,
		  center: false,

          
        }
      }
    })
  });