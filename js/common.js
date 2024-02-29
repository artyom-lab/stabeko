$(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

  $(".sandwich").on("click", function() {
  $(".navbar").toggleClass("active");
  $("body").toggleClass("menubar-in");
  });

  AOS.init({
    duration: 500,
    disable: 'mobile'
  });

});



