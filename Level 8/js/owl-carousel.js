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



  $(document).ready(function ($) {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      margin: 20,
      dots: false,
      autoplay: true,
      nav: false,
      center: false,
      items: 1.2,
      
    });
    var owl = $(".owl-carousel1");
    owl.owlCarousel();
    $(".next-btn").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".prev-btn").click(function () {
      owl.trigger("prev.owl.carousel");
    });
    
    });
  


    $(document).ready(function ($) {
      $(".owl-carousel2").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        nav: false,
        center: true,
        items: 2,
        responsive: {
          320: {
            items: 1,
            
            
          },
          
          
          425: {
            items: 2,
            
            
          },
          
          1000: {
            items: 2,
           
  
            
          }
        }
      });
      var owl = $(".owl-carousel2");
      owl.owlCarousel();
      $(".next-btn2").click(function () {
        owl.trigger("next.owl.carousel");
      });
      $(".prev-btn2").click(function () {
        owl.trigger("prev.owl.carousel");
      });
      
      });
    
    
  