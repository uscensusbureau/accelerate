$(function (){
  // Styleguide drawer
  $('.menu-btn-styleguide, .sliding-panel-close-styleguide').on('click touchstart', function (e) {
    $('.nav-mobile-styleguide').toggleClass('is-visible');
    e.preventDefault();
  });
});
