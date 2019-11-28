let imagesArray = document.querySelectorAll(".slides"),
  leftArrow = document.querySelector("#arrow-left"),
  rightArrow = document.querySelector("#arrow-right"),
  arrayLength = imagesArray.length,
  current = 0;

// sets all of slides to display none
function reset() {
  for (let i = 0; i < arrayLength; i++) {
    imagesArray[i].style.display = "none";
  }
}

// initial the slides
function startSlide() {
  reset();
  imagesArray[0].style.display = "block";
}

startSlide();

// sets the next slide to block to display that image
function slideRight() {
  reset();

  imagesArray[current + 1].style.display = "block";
  current++;
}

rightArrow.addEventListener("click", function() {
  if (current === arrayLength - 1) {
    current = -1;
  }
  slideRight();
});

// sets the previous slide to block to display that image
function slideLeft() {
  reset();
  imagesArray[current - 1].style.display = "block";
  current--;
}

leftArrow.addEventListener("click", function() {
  if (current === 0) {
    current = arrayLength;
  }
  slideLeft();
});
