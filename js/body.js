document.addEventListener("DOMContentLoaded", function () {
   var navLinks = document.querySelectorAll(".nav-link");
   var infoWrapper = document.querySelector(".info-wrapper");

   navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
         var dataId = link.getAttribute("data-id");

         // Remove 'c-b' from the currently active nav-link
         var currentActiveLink = document.querySelector(".nav-link.c-b");
         if (currentActiveLink) {
            currentActiveLink.classList.remove("c-b");
            currentActiveLink.classList.add("c-g");
         }

         // Add 'c-b' to the clicked nav-link
         link.classList.add("c-b");
         link.classList.remove("c-g");

         // Update info-wrapper with the correct info-active-ID
         infoWrapper.classList.remove(
            "info-active-1",
            "info-active-2",
            "info-active-3",
            "info-active-4",
            "info-active-5"
         );
         infoWrapper.classList.add("info-active-" + dataId);
      });
   });
});
