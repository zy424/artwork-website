//resonsive topnav
function topMenu() {
    var x = document.querySelector(".topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//responsive bottomnav
function bottomMenu() {
    var y = document.querySelector(".bottomnav");
    if (y.className === "bottomnav") {
        y.className += " responsive";
    } else {
        y.className = "bottomnav";
    }
}

//homepage slides
$(function(){
    var myIndex = 0;
    var myAutoSlide;
    var allMySlides = $(".my-slides");
    carousel();
    
    function carousel() {
        moveCarousel(true);
        myAutoSlide = setTimeout(carousel, 3000); // Change image every 3 seconds
    }

    function moveCarousel(isNext) {
        for (var i = 0; i < allMySlides.length; i++) {
            allMySlides[i].style.display = "none";  
        }
        if (isNext) {
            myIndex++;
        } else {
            myIndex--;
        }
        if (myIndex > allMySlides.length) {
            myIndex = 1;
        } else if (myIndex < 0) {
            myIndex = allMySlides.length;
        }
          
        allMySlides[myIndex-1].style.display = "block";
    }

    $('.my-slides').mouseover(function(){
        clearTimeout(myAutoSlide);
    });

    $('.my-slides').mouseleave(function(){
        carousel();
    });

    $('.slide-nav-next').click(function(){
        moveCarousel(true);
    });
    
    $('.slide-nav-prev').click(function(){
        moveCarousel(false);
    });
});

//About Page Album
$(function() {
    "use strict";
    $('.image').colorbox({
        rel:'image',
        width:"75%", 
        height:"75%"
    });  
});