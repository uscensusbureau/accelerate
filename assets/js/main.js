---

---

$(function() {
  console.log('executing');

  $('a').smoothScroll();

  $('.masonry-grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 200
  });


  $(window).scroll(function(){
    offsetSlowest = window.setTimeout(function() {
      $(".slowest").css("opacity", 0 + $(window).scrollTop() / 8000);
  	}, 7500);
    $(".slower").css("opacity", 0 + $(window).scrollTop() / 5000);
    offsetSlow= window.setTimeout(function() {
      $(".slow").css("opacity", 0 + $(window).scrollTop() / 2500);
  	}, 4000);
    offsetFast = window.setTimeout(function() {
      $(".fast").css("opacity", 0 + $(window).scrollTop() / 1000);
  	}, 1000);
    $(".fastest").css("opacity", 0 + $(window).scrollTop() / 200);

    // var distance = $("#data-viz-1").offset().top;
    // var currentPosition = $(window).scrollTop();
    // var difference = distance - currentPosition;
    // console.log(distance, currentPosition, difference);
  });
});


function showImages(el) {
  var windowHeight = jQuery( window ).height();
  // console.log("window height", windowHeight);
  $(el).each(function(){
      var thisPos = $(this).offset().top;
      // console.log("position", thisPos);
      var elementHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();
      console.log("element height", elementHeight);
      if (topOfWindow + windowHeight - elementHeight > thisPos ) {
          $(this).addClass("fadeIn");
      }
      if (topOfWindow + windowHeight + 500 > thisPos ) {
          $(this).addClass("fadeOut");
      }
  });
}


$(window).scroll(function() {
    showImages('#data-viz-1');
});

$(window).scroll(function() {
    showImages('#data-viz-2');
});
