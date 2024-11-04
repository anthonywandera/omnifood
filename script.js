//GET CURRENT YEAR
const yr = new Date().getFullYear();
document.querySelector(".date-yr").textContent = yr;

//ADD BUTTON FUNCTIONALITY
//Declare the necessary variables
const btn = document.querySelector(".toggle-nav");
const checkState = document.querySelector(".main-header");

//Add click event
//Declare the necessary variables
btn.addEventListener("click", function () {
  checkState.classList.toggle("open");
});

// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");

// Add click event for each link
allLinks.forEach(function (link) {
  //Get the links destination
  const href = link.getAttribute("href");

  // Add event listener
  link.addEventListener("click", function (event) {
    //Stop Default behavior of that event
    event.preventDefault();

    //Start scrolling for the named destinations
    if (href != "#") {
      const destination = document.querySelector(href);
      destination.scrollIntoView(
        {
          behavior: "smooth",
        },
        href
      );

      //Close menu if it was open
      if (checkState.classList.contains("open")) {
        checkState.classList.remove("open");
      }
    }

    if (href == "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
});

console.log("we good");

// observer
//set-up sticky nav
const obs = new IntersectionObserver(
  function (ary) {
    const ent = ary[0];
    console.log(ent, "-----------");
    // check input
    console.log(ent.isIntersecting);
    if (!ent.isIntersecting) {
      console.log("Success");
      document.body.classList.add("sticky-active");
    }

    if (ent.isIntersecting) {
      console.log("Success");
      document.body.classList.remove("sticky-active");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

const targetEl = document.querySelector(".hero");
obs.observe(targetEl);
