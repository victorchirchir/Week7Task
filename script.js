//define variables
var slidePosition=1;
slideFunction(slidePosition);

//controllling forward and back clicks
function addSlides(n){
    slideFunction(slidePosition+=n);
}

//images
function currentSlide(n){
    slideFunction(slidePosition=n);

}



// slideshow function

function slideFunction(n){
    var i;
    var Slides=document.getElementsByClassName('ImageContainers');
    var SmallDots=document.getElementsByClassName('dots');
    if(n > Slides.length){
        slidePosition=1
    }
    if(n<1){
        slidePosition==Slides.length
    }
    for(i=0;i<Slides.length;i++){
        Slides[i].style.display='none'
    }
    for(i=0;i < SmallDots.length;i++){
        SmallDots[i].className=SmallDots[i].className.replace('enable',"")
        
    }
    Slides[slidePosition-1].style.display='block';
    SmallDots[slidePosition-1].className+='enable';
}

