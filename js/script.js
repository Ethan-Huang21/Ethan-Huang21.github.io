///////////////////////////////////////////////////////////
// navlist toggles

const navlist = document.querySelector(".main-nav-list");

navlist.addEventListener("mouseenter", function () {
  navlist.classList.toggle("active");
});

navlist.addEventListener('mouseleave', function() {
  navlist.classList.toggle("active");
})

// navlist.addEventListener("click", function () {
//   navlist.classList.toggle("active");
// });
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Smooth Scrolling Animation
// REF: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.getAttribute("href") === "#") {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to the target element
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Carousel Component
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all carousel elements on the page
  const carousels = document.querySelectorAll(".carousel");
  // Initialize each carousel individually
  carousels.forEach((carousel) => initializeCarousel(carousel));
});

function initializeCarousel(carousel) {
  // Current slide index for this carousel
  let currentSlide = 0;
  // Select all image slides within this carousel
  const slides = carousel.querySelectorAll(".p--img-box picture");
  // Total number of slides
  const totalSlides = slides.length;
  // Select the carousel-inner container for this carousel
  const carouselInner = carousel.querySelector(".carousel-inner");
  // Select the indicators container for this carousel
  const indicatorsContainer = carousel.querySelector(".indicators");

  // Function to show a specific slide by index
  function showSlide(index) {
    // Wrap around the index if it goes out of bounds
    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    // Calculate the offset for the current slide
    const offset = -currentSlide * 100;
    // Move the carousel to the correct position
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Update the indicators to reflect the current slide
    updateIndicators();
  }

  // Function to move to the next or previous slide
  function moveSlide(step) {
    // Show the slide at the new index
    showSlide(currentSlide + step);
  }

  // Function to create slide indicators
  function createIndicators() {
    // Create an indicator for each slide
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement("span");
      // Set the slide index as a data attribute
      indicator.setAttribute("data-slide", i);
      // Add a click event listener to the indicator
      indicator.addEventListener("click", (e) => {
        // Show the slide corresponding to the clicked indicator
        showSlide(parseInt(e.target.getAttribute("data-slide")));
      });
      // Append the indicator to the indicators container
      indicatorsContainer.appendChild(indicator);
    }
    // Set the initial state of the indicators
    updateIndicators();
  }

  // Function to update the active indicator
  function updateIndicators() {
    // Select all indicators within this carousel
    const indicators = indicatorsContainer.querySelectorAll("span");
    // Update the active state of each indicator
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  }

  // Add click event listeners to the navigation buttons
  carousel
    .querySelector(".prev")
    .addEventListener("click", () => moveSlide(-1));
  carousel.querySelector(".next").addEventListener("click", () => moveSlide(1));

  // Create the indicators and show the initial slide
  createIndicators();
  showSlide(currentSlide);
}
