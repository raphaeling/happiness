document.querySelector('.scroll-to-introduction').addEventListener('click', function() {
    var topOfElement = document.querySelector('#introduction').offsetTop - 70;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  });