$(document).ready(function () {
    $('.nowshowing-owl').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      center: false,
      items: 3,
      responsive: {
        320: {
          items: 1,
          nav:false,
          
        },
        700: {
          items: 2,
          nav: false,
          
        },
        1000: {
          items: 3,
          nav: false,

          
        }
      }
    })
  });




  $(document).ready(function () {
    $('.nowshowing-owl2').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      center: false,
      items: 2,
      responsive: {
        320: {
          items: 1,
          nav:false,
          
        },
        700: {
          items: 2,
          nav: false,
          
        },
        1000: {
          items: 2,
          nav: false,

          
        }
      }
    })
  });




  