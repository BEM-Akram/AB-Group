// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Nav scroll state
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Fade-up on scroll (IntersectionObserver)
const fadeEls = document.querySelectorAll(".fade-up");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all if no IntersectionObserver
  fadeEls.forEach((el) => el.classList.add("in-view"));
}
