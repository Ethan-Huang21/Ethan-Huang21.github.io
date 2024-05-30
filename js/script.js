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
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    console.log(e);
    /* To skip the default .html stuff we did */
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    // scroll back to top
    // this doesn't always work in safari either
    // We copy the pkg link below in a <script src="link"></script> in our HTML file
    // This should fix it
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


    // scroll to other links
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // Close mobile navigation if it's open
    // if (link.classList.contains('main-nav-link')) {
    //   // toggle -- remove if it exists, add if it doesnt
    //   headerEl.classList.toggle("nav-open");
    // }
  });
});