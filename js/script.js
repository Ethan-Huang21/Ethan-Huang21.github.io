///////////////////////////////////////////////////////////
// navlist toggles

const navlist = document.querySelector(".main-nav-list");

// navlist.addEventListener("mouseenter", function () {
//   navlist.classList.toggle("active");
// });

// navlist.addEventListener('mouseleave', function() {
//   navlist.classList.toggle("active");
// })

navlist.addEventListener("click", function () {
  navlist.classList.toggle("active");
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Smooth Scrolling Animation
// REF: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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