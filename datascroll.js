document.querySelector('.scroll-to-critique').addEventListener('click', function() {
    var topOfElement = document.querySelector('#critique').offsetTop - 70;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  });