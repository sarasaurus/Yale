
function basicBurger (){//we declare a function in js
    let hamburger = document.querySelector(".hamburger");// go to the html document, find the element with the css selector ".hamburger" and store it in the variable "hamburger" 
    let dropmenu = document.querySelector(".navdropdown");
      let nav = document.querySelector(".navlinks");//see above, but searching for ".navlinks"
      //const navLinks = document.querySelectorAll(".navlinks li");
      console.log(nav.classList);//this is logging the classes attached to the element "nav" in the html document
      console.log(nav);
      console.log(hamburger);//logging our variables to the console
    hamburger.addEventListener("click", () => {
      //Toggle Nav//
          nav.classList.toggle("nav-active");
         dropmenu.classList.remove("nav-active");

      //congrats//
      console.log("you did it!")
    });
    console.log("the listener has been added")
  }

/* slideshow uses a series of imgs already in dom and then toggles visibility using an active class*/
function slideShow () {
let slideImages = document.querySelector('.slideshow');
  //create slides
for(let i = 1; i <= 5; i++) {
      let newImage = document.createElement('img');
      newImage.setAttribute('src', 'img/image-' + i + '.png');
      newImage.setAttribute('class',`slide`)
      slideImages.appendChild(newImage);
      console.log(`new image:${newImage}`);
      console.log(`slideshow:${slideImages}`);
  }
let slides = slideImages.getElementsByClassName('slide');
let slidesLength = slides.length;
console.log(`number of slides:${slidesLength}`);
let firstSlide = slides[0];
let lastSlide = slides[slidesLength - 1];

}
function dropDown () {
  let cancelmenu=document.querySelector(".container")
  let dropmenu = document.querySelector(".navdropdown");
  let mainmenu=document.querySelector(".navlinks");
mainmenu.addEventListener("mouseover",()=>{
  dropmenu.classList.toggle("nav-active")
})
cancelmenu.addEventListener("mouseover", ()=>{
  dropmenu.classList.remove("nav-active");
})
}
  //exports
dropDown ();
basicBurger();
slideShow();

//slideshow based on an image gallery//
// const displayedImage = document.querySelector('.displayed-img');
// const thumbBar = document.querySelector('.thumb-bar');

// const btn = document.querySelector('button');
// const overlay = document.querySelector('.overlay');

// /* Looping through images */

// for(let i = 1; i <= 5; i++) {
//   const newImage = document.createElement('img');
//   newImage.setAttribute('src', 'images/pic' + i + '.jpg');
//   thumbBar.appendChild(newImage);
//   newImage.onclick = function(e) {
//     displayedImage.src = e.target.src;
//   }
// }

// /* Wiring up the Darken/Lighten button */

// btn.onclick = function() {
//   const btnClass = btn.getAttribute('class');
//   if(btnClass === 'dark') {
//     btn.setAttribute('class','light');
//     btn.textContent = 'Lighten';
//     overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//   } else {
//     btn.setAttribute('class','dark');
//     btn.textContent = 'Darken';
//     overlay.style.backgroundColor = 'rgba(0,0,0,0)';
//   }
