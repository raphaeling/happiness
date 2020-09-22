document.querySelector('.scroll-to-bibliography').addEventListener('click', function() {
    var topOfElement = document.querySelector('#bibliography').offsetTop - 70;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  });