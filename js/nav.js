const nav = document.querySelector("nav");


const links = document.querySelectorAll(".smooth-scroll-link");
links.forEach(function (e) {
   e.addEventListener("click", function (e) {
      e.preventDefault();
      let o = this.getAttribute("href"),
         l = document.querySelector(o);
      if (l) {
         let t = document.querySelector(" nav").offsetHeight,
            n = l.offsetTop - t;
         window.scrollTo({
            top: n,
            behavior: "smooth",
         });
      }
   });
});

Array.from(document.querySelectorAll("nav .hamburger")).forEach((e) => {
   e.addEventListener("click", changeNav);
});

let bodyelem = document.querySelector("body");

function changeNav() {
   bodyelem.classList.contains("nav-open")
      ? bodyelem.classList.remove("nav-open")
      : bodyelem.classList.add("nav-open");
}

Array.from(document.querySelectorAll("aside a")).forEach((e) => {
   e.addEventListener("click", changeNav);
});
