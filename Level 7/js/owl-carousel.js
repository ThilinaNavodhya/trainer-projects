$(document).ready(function () {
    $('.nowshowing-owl').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      items: 1,
      responsive: {
        424: {
          items: 1,
          nav: false,
		      center: false,
          
        },
        
        1000: {
          items: 1,
          nav: true,
		     center: false,

          
        }
      }
    })
  });