document.addEventListener('DOMContentLoaded', function() {
  var content = document.querySelector('.wrapper');
  content.classList.add('visible');
});

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
  setTimeout(function() {
  $(window).scroll(function(){
    clearTimeout(scrollTimeout);
    box.addClass('scrolled');
    scrollTimeout = setTimeout(function() {
    box.removeClass('scrolled');
    }, 800);
  });
  }, 1500); 

  AOS.init({
    duration: 1000,
    disable: 'mobile',
    once: true,
  });

// POPUP

  $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var windowHeight = $(this).height();
      var imageTop = $('.modal-close').offset().top;

      if (imageTop < scrollTop + windowHeight) {
          var opacity = 1 - (scrollTop + windowHeight - imageTop) / windowHeight;
          $('.modal-close').css('opacity', opacity);
      }
    });

  $(window).scroll(function() {
      var windowBottom = $(window).scrollTop() + $(window).height(); 
      var sectionTop = $('.modal-close').offset().top; 
      var sectionBottom = sectionTop + $('.modal-close').height(); 
      
      if (windowBottom > sectionTop && windowBottom < sectionBottom) {
          var translateY = (windowBottom - sectionTop) / 2; 
          $('.to-review').css('transform', 'translateY(' + translateY + 'px)');
      }
  });

    // $(window).scroll(function(){
    //     // Проверяем, достигли ли мы нижнего края секции
    //     if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //         // Если достигли, убираем класс .active у попапа
    //         $('.popup').removeClass('active');
    //     }
    // });




// // Получить доступ к iframe с классом "active"
// var iframe = document.querySelector('iframe.active');

// // Проверить, что iframe был найден
// if (iframe) {
//     // Получить объект содержимого iframe
//     var iframeContent = iframe.contentWindow || iframe.contentDocument;

//     // Проверить, что объект содержимого был успешно получен
//     if (iframeContent.document) {
//         // Теперь вы можете взаимодействовать с элементами страницы внутри iframe, используя стандартные методы JavaScript или jQuery
//         // Например:
//         var iframeBody = iframeContent.document.querySelector('body');
//         if (iframeBody) {
//             // Изменить стиль элемента внутри iframe
//             iframeBody.style.backgroundColor = 'red';
//         }
//     } else {
//         console.error('Не удалось получить доступ к содержимому iframe.');
//     }
// } else {
//     console.error('iframe с классом "active" не найден.');
// };

$(".btn-popup").on("click", function() {
    $(".popup").addClass("active");
    $("body").addClass("menubar-in");
});

$(".modal-close").on("click", function() {
    $(".popup").removeClass("active");
    $("body").removeClass("menubar-in");
});

});

