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
  });
});
