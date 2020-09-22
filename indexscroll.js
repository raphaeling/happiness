document.querySelector('.scroll-to-abouttheproject').addEventListener('click', function() {
    var topOfElement = document.querySelector('#abouttheproject').offsetTop - 70;
    window.scroll({ top: topOfElement, behavior: "smooth" });
  });