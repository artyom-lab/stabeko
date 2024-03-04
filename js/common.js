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
    
  var box = $('.lines-box');
  var scrollTimeout;
  $(window).scroll(function(){
      clearTimeout(scrollTimeout);
      box.addClass('scrolled');
      scrollTimeout = setTimeout(function() {
          box.removeClass('scrolled');
      }, 800);
    });

  AOS.init({
    duration: 1000,
    disable: 'mobile',
    once: true,
  });

});



