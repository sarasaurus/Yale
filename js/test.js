function slideShow () {
    let displayImage=document.querySelector('.displayed-img')
    let slideContainer=document.querySelector('.slidecontainer');
    let slideImages = document.querySelector('.slideshow');
    let prevbutton = document.querySelector('.prev');
    let nextbutton= document.querySelector('.next');
    let index=0;
      //create slides
    for(let i = 1; i <= 5; i++) {
          let newImage = document.createElement('img');
          newImage.setAttribute('src', 'img/image-' + i + '.png');
          newImage.setAttribute('class',`slide`)
          slideImages.appendChild(newImage);
          console.log(`new image:${newImage}`);
          console.log(`slideshow:${slideImages}`);
      }
    //select all slide
    let slides = slideImages.getElementsByClassName('slide');
    let slidesLength = slides.length;
    console.log(`number of slides:${slidesLength}`);
    let firstSlide = slides[0];
    let lastSlide = slides[slidesLength - 1];
    //copy from codepen infinite slideshow
    
    
    }