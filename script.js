/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});

/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typing-text");

const roles = [
  "Full Stack Developer",
  "MERN Stack Learner",
  "Cloud Enthusiast",
  "Problem Solver",
  "BCA Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {
  const progressBar =
    document.getElementById("progress-bar");

  const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  progressBar.style.width = progress + "%";
});

/* =========================
   CURSOR GLOW
========================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* =========================
   MOBILE MENU
========================= */

const hamburger =
  document.querySelector(".hamburger");

const navLinks =
  document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
});

/* =========================
   CLOSE MOBILE MENU
========================= */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show-menu");
    });
  });

/* =========================
   SMOOTH SCROLL
========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset <
      sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active");
    }
  });
});

/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
  document.querySelectorAll(
    ".section, .project-card, .skill-card, .achievement-card, .cert-card"
  );

const revealOnScroll = () => {

  revealElements.forEach(element => {

    const elementTop =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("reveal");
    }
  });
};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* =========================
   BACK TO TOP
========================= */

const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   CONTACT FORM
========================= */

const form =
  document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const inputs =
    form.querySelectorAll(
      "input, textarea"
    );

  let valid = true;

  inputs.forEach(input => {

    if (
      input.value.trim() === ""
    ) {
      valid = false;
    }
  });

  if (!valid) {
    alert(
      "Please fill all fields."
    );
    return;
  }

  alert(
    "Thank you! Your message has been submitted."
  );

  form.reset();
});

/* =========================
   PARALLAX HERO IMAGE
========================= */

window.addEventListener("mousemove", (e) => {

  const image =
    document.querySelector(
      ".hero-image img"
    );

  if (!image) return;

  const x =
    (window.innerWidth / 2 -
      e.pageX) / 40;

  const y =
    (window.innerHeight / 2 -
      e.pageY) / 40;

  image.style.transform =
    `translate(${x}px, ${y}px)`;
});

/* =========================
   FLOATING ANIMATION
========================= */

const cards =
  document.querySelectorAll(
    ".project-card"
  );

cards.forEach(card => {

  card.addEventListener(
    "mouseenter",
    () => {
      card.style.transform =
        "translateY(-12px)";
    }
  );

  card.addEventListener(
    "mouseleave",
    () => {
      card.style.transform =
        "translateY(0)";
    }
  );
});

/* =========================
   YEAR AUTO UPDATE
========================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}

/* =========================
   CONSOLE SIGNATURE
========================= */

console.log(
  "%cTeju Abhinanda Portfolio",
  "color:#3b82f6;font-size:20px;font-weight:bold;"
);

console.log(
  "%cBuilt with HTML, CSS & JavaScript",
  "color:#8b5cf6;font-size:14px;"
);