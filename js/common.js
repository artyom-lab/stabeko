$(function () {

  var content = $('.wrapper');
  content.addClass('visible');
  var linesBox = $('.lines-box');
  setTimeout(function() {
    linesBox.addClass('hidden');
    setTimeout(function() {
      linesBox.removeClass('hidden');
    }, 1500);
  });

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
  setTimeout(function() {
  $(window).on("scroll", function(){
    clearTimeout(scrollTimeout);
    box.addClass('scrolled');
    scrollTimeout = setTimeout(function() {
    box.removeClass('scrolled');
    }, 800);
  });
  }, 1500);

  $(window).on("scroll", function() {
    if ($('.modal-close').length > 0) {

      // Calculate opacity
      var scrollTop = $(this).scrollTop();
      var windowHeight = $(this).height();
      var imageTop = $('.modal-close').offset().top;
      if (imageTop < scrollTop + windowHeight) {
        var opacity = 1 - (scrollTop + windowHeight - imageTop) / windowHeight;
        $('.modal-close').css('opacity', opacity);
      }

      // Calculate translateY
      var windowBottom = $(window).scrollTop() + $(window).height(); 
      var sectionTop = $('.modal-close').offset().top; 
      var sectionBottom = sectionTop + $('.modal-close').height(); 
      if (windowBottom > sectionTop && windowBottom < sectionBottom) {
        var translateY = (windowBottom - sectionTop) / 2; 
        $('.to-review').css('transform', 'translateY(' + translateY + 'px)');
      }

    }
  });

  AOS.init({
    duration: 1000,
    disable: 'mobile',
    once: true,
  });

  // POPUP
  $(".btn-popup").on("click", function() {
    $(".popup").addClass("active");
    $("body").addClass("menubar-in");
  });

  $(".modal-close, close-popup").on("click", function() {
    parent.$(".popup").removeClass("active");
    parent.$("body").removeClass("menubar-in");
  });

});

