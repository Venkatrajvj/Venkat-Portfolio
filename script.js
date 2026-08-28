/* =========================================================
   PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ================= SCROLL REVEAL ================= */

  const revealElements = document.querySelectorAll(
    ".section-title, .about-text, .skill-card, .project-card, .experience-card, .education-card, .resume-card, .contact-item, .contact-intro",
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* ================= STAGGER EFFECT ================= */

  const cards = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card, .contact-item",
  );

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 80}ms`;
  });

  /* ================= ACTIVE NAVBAR ================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const updateActiveNav = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  /* ================= NAVBAR SCROLL EFFECT ================= */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ================= BUTTON MAGNETIC EFFECT ================= */

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });

  /* ================= PROJECT CARD TILT ================= */

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ================= HERO PARALLAX ================= */

  const heroContent = document.querySelector(".hero-content");

  window.addEventListener("scroll", () => {
    if (!heroContent) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.12}px)`;

      heroContent.style.opacity = Math.max(0, 1 - scrollPosition / 700);
    }
  });

  /* ================= CURSOR GLOW ================= */

  const cursorGlow = document.createElement("div");

  cursorGlow.className = "cursor-glow";

  document.body.appendChild(cursorGlow);

  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });

  /* ================= SOCIAL LINK EFFECT ================= */

  const socialLinks = document.querySelectorAll(".social-links a");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-3px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });
  });

  /* ================= CONSOLE MESSAGE ================= */

  console.log(
    "%c Welcome to Venkatraj's Portfolio 🚀 ",
    "color:#d6b36a;font-size:16px;font-weight:bold;",
  );
});

/* ================= PREMIUM NAVBAR ================= */

const navbarHeader = document.querySelector("header");
const navbarLinks = document.querySelectorAll(".nav-links a");
const pageSections = document.querySelectorAll("section[id]");

/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbarHeader.classList.add("nav-scrolled");
  } else {
    navbarHeader.classList.remove("nav-scrolled");
  }
});

/* ================= ACTIVE SECTION ================= */

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentSection = entry.target.getAttribute("id");

        navbarLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
  },
);

pageSections.forEach((section) => {
  navObserver.observe(section);
});

/* ================= NAV LINK SMOOTH SCROLL ================= */

navbarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    event.preventDefault();

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
