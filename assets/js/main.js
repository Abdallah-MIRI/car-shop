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

// Width Device
function widthDevice() {
    if (screen.width ===  1024) {
        for (var i = 0; i < container.children.length; i++) {
            container[i] = 2;
        }
    }
}
widthDevice();

// Prev
/* prev.onclick = function () {

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
} */

// function slideShow() {
//     for (var i = 0; i < part.length; i++) {

//         part[i].classList.add('active');
//         console.log(part);
//     }
// }

// setTimeout(slideShow, 3000);


/* 
// Show and Hidden Filters Page Search
*/
// var btnShow = document.getElementById('showcat'),
//     icon    = document.getElementById('iconfilter'),
//     filters = document.getElementById('type-filters');

// btnShow.onclick = function () {
//     filters.classList.toggle('hidden-filters');
//     btnShow.children.classList.toggle('hidden');
// }

// console.log(btnShow.children);