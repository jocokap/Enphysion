const mainVideo = new Plyr("#main-video");
new Plyr("#testimonial_1");
new Plyr("#testimonial_2");
new Plyr("#testimonial_3");
new Plyr("#testimonial_4");
new Plyr("#testimonial_5");
new Plyr("#testimonial_6");

const glide = new Glide(".reviews-glide", {
   type: "carousel",
   perView: 3,
   focusAt: "center",
   breakpoints: {
      800: {
         perView: 1,
      },
   },
});

const logo = document.querySelector(".logo");

window.addEventListener("scroll", function () {
   0 === window.scrollY
      ? (nav.classList.add("top"), (logo.src = "img/logo-w.png"))
      : (nav.classList.remove("top"), (logo.src = "img/logo-blue.png"));
}),
   nav.classList.add("top"),
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });

glide.on("run", function () {
   // Hide overflow content when glide is active
   document
      .querySelectorAll(".review-overflow")
      .forEach(function (overflowContent) {
         overflowContent.style.display = "none";
      });

   // Set "Read More" text to default
   document.querySelectorAll(".read-more").forEach(function (button) {
      button.innerText = "Read More";
   });
});

glide.mount();

document.addEventListener("DOMContentLoaded", function () {
   const readMoreButtons = document.querySelectorAll(".read-more");

   readMoreButtons.forEach((button) => {
      button.addEventListener("click", toggleReadMore);
   });

   function toggleReadMore() {
      const reviewContent = this.parentNode.previousElementSibling;
      const overflowContent = reviewContent.querySelector(".review-overflow");

      if (
         overflowContent.style.display === "none" ||
         overflowContent.style.display === ""
      ) {
         overflowContent.style.display = "inline";
         this.innerText = "Read Less";
      } else {
         overflowContent.style.display = "none";
         this.innerText = "Read More";
      }
   }
   setTimeout(function () {
      var popup = document.getElementById("popup");
      popup.classList.add("show-popup");
   }, 2000); // 3 seconds delay for popup to appear
});

function closePopup() {
   var popup = document.getElementById("popup");
   popup.classList.add("scale-down");
   setTimeout(() => {
      popup.style.display = "none";
   }, 1500);
}
setTimeout(() => {
   window.addEventListener("load", function () {
      // Get the iframe element
      var calendlyIframe = document.getElementById("calendlyIframe");

      // Set the actual src attribute after the page has loaded
      calendlyIframe.src =
         "https://calendly.com/enphysion?embed_domain=www.enphysion.com&embed_type=Inline";
   });
}, 10);

const svgElement = document.getElementById("graph");

// Function to check if an element is in the viewport
function isInViewport(element) {
   var rect = element.getBoundingClientRect();
   return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
         (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

// Function to add class when SVG is in viewport
function addClassIfInView() {
   if (isInViewport(svgElement)) {
      svgElement.classList.add("visible");
      // Remove event listener after adding the class once
      window.removeEventListener("scroll", addClassIfInView);
   }
}

// Add event listener to check for scroll event
window.addEventListener("scroll", addClassIfInView);

// Initial check in case SVG is already in view on page load
addClassIfInView();
