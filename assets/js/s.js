// Get Posts Slide
let postSlide = Array.from(document.querySelectorAll('.post-slide')),
    // Slides Count
    slidesCount = postSlide.length,
    // Set Start Slide
    startSlide = 0,
    // Get Dots
    dotsItem = document.getElementById('dots');

// Craet List Items Set Attribute
for (let i = 1; i <= slidesCount; i++) {

 // Create Li
 let dotItems = document.createElement('span');
 // Add Class List item
 dotItems.className = "item";
 // Set Custom Attribute
 dotItems.setAttribute('data-index', i);
 // Set Append Child Ul
 dotsItem.appendChild(dotItems);
}

// Dots Get Int Item
getIntItems = Array.from(document.querySelectorAll('item'));

// Loop Through All Bullets Items
for (var d = 0; d < dotsItem.length; d++) {
 getIntItems[d].onclick = function () {

   startSlide = parseInt(this.getAttribute('data-index'));
   // Function Add Class Active
   theChecker();
 }
}

// Trigger The Checker Function
theChecker();

// Create The Checker Function
function theChecker() {

 // Remove All Active
 removeAllActive();

 // Set Active Class on Current Slide
 postSlide[startSlide - 1].classList.add('active');

 // Set Active class on Current Pagination Item
 getIntItems[startSlide - 1].classList.add('active');
}

// Remove All Active Class From Items Post and Pagination Bullets
function removeAllActive() {

   // Loop Through Items Post
   postSlide.forEach(function (item) {
       item.classList.remove('active');
   });

   // Loop Through Pagination Dots Item
   getIntItems.forEach(function (dotItem) {

       dotItem.classList.remove('active');

   });

}
