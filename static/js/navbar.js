const hero = document.getElementById("hero");
const headerSection = document.getElementById("headerSection");
const header = document.querySelector(".navbar-section");

$(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
  $(".register-btn-div").toggleClass("mobile-nav-register");
});

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    ent.isIntersecting === false
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: "0.5",
  }
);

observer.observe(hero);
