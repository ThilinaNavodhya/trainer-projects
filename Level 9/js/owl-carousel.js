
$(document).ready(function ($) {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      margin: 20,
      dots: true,
      autoplay: true,
      nav: false,
      center: false,
      items: 3,
	  responsive: {
		0: {
		  items: 1,
		  
		  
		},
		
		
		768: {
		  items: 2,
		  
		  
		},
		
		1000: {
		  items: 3,
		 

		  
		}
	  }
      
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
      $('.nowshowing-owl').owlCarousel({
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
  
  
  
  
    