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
    $(".slowest").css("opacity", 0 + $(window).scrollTop() / 5000);
    $(".slower").css("opacity", 0 + $(window).scrollTop() / 3000);
    $(".slow").css("opacity", 0 + $(window).scrollTop() / 2000);
    $(".fast").css("opacity", 0 + $(window).scrollTop() / 500);
    $(".fastest").css("opacity", 0 + $(window).scrollTop() / 100);

  });
});
