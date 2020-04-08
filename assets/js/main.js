/* 
** Author: Abdallah Mohammed
** Theme: Shop Buy
** Version: 1.0
*/




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

