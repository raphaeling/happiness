jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 10) {
        jQuery('.navbar').addClass('scrolled');
    } else {
        jQuery('.navbar').removeClass('scrolled');
    }
    });


// $('html, body').animate({
//     scrollTop: $("#abouttheproject").offset().top - $(".navbar").height() // minus the nav height
//     }, 1000);

var btn = $('#backtotopbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// SCROLL TO ELEMENTS

// document.querySelector('.scroll-to-introduction').addEventListener('click', function() {
//   var topOfElement = document.querySelector('#introduction').offsetTop - 70;
//   window.scroll({ top: topOfElement, behavior: "smooth" });
// });

// document.querySelector('.scroll-to-abouttheproject').addEventListener('click', function() {
//   var topOfElement = document.querySelector('#abouttheproject').offsetTop - 70;
//   window.scroll({ top: topOfElement, behavior: "smooth" });
// });

// document.querySelector('.scroll-to-abouttheproject').addEventListener('click', function() {
//   var topOfElement = document.querySelector('#abouttheproject').offsetTop - 70;
//   window.scroll({ top: topOfElement, behavior: "smooth" });
// });
