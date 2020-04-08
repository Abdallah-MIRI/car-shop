/* 
** Author: Abdallah Mohammed
** Theme: Shop Buy
** Version: 1.0
*/


// Scroll Header
var headerShadow = document.getElementById('header-fixed');

window.onscroll = function () {

    if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
        headerShadow.classList.add('shadow-sm');
    } else {
        headerShadow.classList.remove('shadow-sm');
    }
}


// Icon Hamburger Menu
var iconHam = document.getElementById('icon-hamburger'),

    menuShow = document.getElementById('menu-show');

iconHam.onclick = function () {
    iconHam.classList.toggle('open');
    menuShow.classList.toggle('active-menu');
}




// Slideshow
const container = document.getElementById('containerpart');

var part = document.getElementsByClassName('sell-part'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

// Prev
prev.onclick = function () {

    for (var i = 0; i < part.length; i++) {

        container.firstElementChild.classList.remove('active');
        container.lastElementChild.classList.add('active');

    }
}

// Next
next.onclick = function () {

    for (var i = 0; i < part.length; i++) {

        container.lastElementChild.classList.add('active');
        container.firstElementChild.classList.remove('active');

    }
}

console.log(container.firstElementChild);
// function slideShow() {
//     for (var i = 0; i < part.length; i++) {

//         part[i].classList.add('active');
//         console.log(part);
//     }
// }

// setTimeout(slideShow, 3000);

