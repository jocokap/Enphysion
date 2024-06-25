var accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(function (header) {
   header.addEventListener("click", function () {
      var accordionInfo = this.nextElementSibling;
      accordionInfo.classList.toggle("active");

      var arrow = this.querySelector(".accordion-arrow");
      arrow.style.transform = accordionInfo.classList.contains("active")
         ? "rotate(180deg)"
         : "rotate(0)";
   });
});
