if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
 
function reveal(){
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowheight - elementVisible){
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.banner-area h1').css({
        opacity: function() {
          var elementHeight = $(this).height(),
              opacity = (((elementHeight - scrollTop) / elementHeight / 10)) + 1;  
          return opacity;
        },
        fontSize: function() {
            var elementHeight = $(this).height(),
            fontSize = (((elementHeight - scrollTop) / elementHeight / 10)) + 100;
            return fontSize;
        }
      });
  });
window.addEventListener("scroll", reveal)
