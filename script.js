const images = document.querySelectorAll('.header-slider ul img');
const previousButton = document.querySelector('.control_prev');
const nextButton = document.querySelector('.control_next');

let n = 0;

// Function to change the slide
function changeSlide() {
  // Hide all images
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  // Show the current image
  images[n].style.display = 'block';
}


changeSlide();

// Previous button event listener
previousButton.addEventListener('click', (e) => {
  if (n > 0) {
    n--;
  } else {
    n = images.length - 1; 
  }
  changeSlide();
});

// Next button event listener
nextButton.addEventListener('click', (e) => {
  if (n < images.length - 1) {
    n++;
  } else {
    n = 0; 
  }
  changeSlide();
});


const scrollContainers = document.querySelectorAll('.products'); 
for (const item of scrollContainers) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault(); 
    item.scrollLeft += evt.deltaY; 
  });
} 