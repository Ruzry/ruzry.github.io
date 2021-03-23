//Select DOM Items
const menuBTN = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State Of Menu
let showMenu = false;

menuBTN.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBTN.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        //set Menu State
        showMenu = true;
    }
    else{
        menuBTN.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        //set Menu State
        showMenu = false;

    }

}


var slideIndex = 0;
selectImage(slideIndex);

/**
 * Change the image div by inputting -1 to decrement or 1 to increment
 * @param n The increment/decrement value. Must be 1 or -1.
 */
function changeImage(n) { 

    var dots = document.getElementsByClassName("demo");
    var imageAmount = dots.length;

    if ((slideIndex + n) >= 0 && (slideIndex + n) < imageAmount){

        slideIndex += n;
        showImage(slideIndex); 
    }
}

/**
 * Select the image to display with the index number of the image.
 * @param n int corresponding to the slide index.
 */
function selectImage(n) {
    showImage(slideIndex = n);

}

/**
 * Function adds and removes the current tag and alters
 * the display style so only the selected image is showing.
 * @param n The index for the image to be shown.
 */
function showImage(n){

    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var imageAmount = dots.length;

    //console.log(imageAmount);
    //console.log(slideIndex);

    for (i = 0; i < x.length; i++){

         x[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("current", "");
    }

    x[slideIndex].style.display = "inline";
    dots[slideIndex].className += "current";
    
}