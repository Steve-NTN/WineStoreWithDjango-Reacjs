const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.navm');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapsem');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('#btn-headest').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

$('#btn-join').click(function() {
   $('html, body').animate({
    scrollTop: $("#test").offset().top
  }, 1000);
});

$('#btn-contact').click(function() {
   $('html, body').animate({
    scrollTop: $(".footer").offset().top
  }, 1000);
});

// Auto slide image
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dot-active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// Event add and remove class toolbar head when scroll
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $(".navm").addClass("scroll-nav");
    } else {
      $(".navm").removeClass("scroll-nav");
    }
  });