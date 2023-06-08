// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Подключение через NPM (в данном проекте не используется):
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



// Подключение через CDN (быстрее работает) 
/*
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
*/
// GSAP Animation title ======================
const animTitleGsap = document.querySelectorAll('.title-anim__title');

if (animTitleGsap) {
  gsap.to(".brands__txt-anim", {
    scrollTrigger: {
      trigger: ".brands__title-anim",
      // markers: true,
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "150% 100%",
    ease:"none",
  });
  gsap.to(".promo__txt-anim", {
    scrollTrigger: {
      trigger: ".promo__title",
      // markers: true,
      start: "bottom bottom",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "150% 100%",
    ease:"none",
  });
}

// GSAP Slider Benefits ===================
const container = document.querySelector(".slider-benefits");

if (container) {
  const sections = gsap.utils.toArray(".slider-benefits__slide");
  let matchMedia = gsap.matchMedia();

  matchMedia.add('(min-width: 769px)', () => {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 2,
        start: "top top",
        end: "bottom",
        // markers: true,
      }
    });
  });

  matchMedia.add('(max-width: 768px)', () => {
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".benefits",
        pin: true,
        scrub: 2,
        start: "top top",
        end: "bottom",
        // markers: true,
      }
    });
  });
}
if (animTitleGsap) {
// -----------------------------------
  gsap.to(".needs__title-txt", {
    scrollTrigger: {
      trigger: ".needs__title-title",
      // markers: true,
      start: "bottom bottom",
      end: "bottom center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "150% 100%",
    ease:"none",
  });

  gsap.to(".cases__txt-anim", {
    scrollTrigger: {
      trigger: ".cases__title-anim",
      // markers: true,
      start: "bottom bottom",
      end: "bottom center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "150% 100%",
    ease:"none",
  });

  gsap.to(".clients__title-txt", {
    scrollTrigger: {
      trigger: ".clients__title-anim",
      // markers: true,
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    ease:"none",
  });
}
// GSAP Slider Clients ===================
const containerClients = document.querySelector(".clients");

if (containerClients) {
  const sectionsClients = gsap.utils.toArray(".item-feedback");
  gsap.to(sectionsClients, {
    yPercent: -100 * (sectionsClients.length - 1),
    ease: "linear.easeNone",
    scrollTrigger: {
      trigger: containerClients,
      pin: true,
      scrub: 1,
      start: "top top",
      // end: "+=400  bottom",
      // markers: true,
    }
  });
}

if (animTitleGsap) {
// .team__txt-anim ---------------------------
  gsap.to(".team__txt-anim", {
    scrollTrigger: {
      trigger: ".team__title-anim",
      // markers: true,
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    ease:"none",
  });

  gsap.to(".about__title-txt", {
    scrollTrigger: {
      trigger: ".about__title-anim",
      // markers: true,
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    ease:"none",
  });

    // .chanels__title-anim
    // .chanels__txt-anim
  gsap.to(".chanels__txt-anim", {
    scrollTrigger: {
      trigger: ".chanels__title-anim",
      // markers: true,
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    ease:"none",
  });
}
// == Cusrom cursor ===========================================
const cursor = document.querySelector(".cursor-cases");
if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.cssText = "left:"+e.clientX+"px; top:"+e.clientY+"px;";
  });
}

const itemCases = document.querySelectorAll('.item-cases__image');
if (itemCases) {
  itemCases.forEach(item => {
    const cursor = document.querySelector(".cursor-cases");
    item.addEventListener("mouseenter", function() {
      cursor.classList.add('_active-cursor');

    });
    item.addEventListener("mouseleave", function() {
      cursor.classList.remove('_active-cursor');
    });
  });
}

// -- Cursor Team ---------------------------------------------
const cursorTeam = document.querySelector('.team-cursor');
const sliderTeam = document.querySelector('.team__slider');

if (cursorTeam) {
  sliderTeam.addEventListener("mouseenter", moveTeamCursor);
  sliderTeam.addEventListener("mouseleave", leaveTeamCursor);

  function moveTeamCursor() {
    sliderTeam.addEventListener("mousemove", (e) => {
      cursorTeam.style.cssText = "left:"+e.clientX+"px; top:"+e.clientY+"px;";
    });
    cursorTeam.classList.add('_cursor-enter');
    cursorTeam.classList.remove('_cursor-leave');
  }

  function leaveTeamCursor() {
      cursorTeam.classList.remove('_cursor-enter');
      cursorTeam.classList.add('_cursor-leave');
      cursorTeam.style.cssText = "left:50%; top:50%;";
  }
}

// SERVICES PAGE ======================================================
if (animTitleGsap) {
  let matchMedia = gsap.matchMedia();

  matchMedia.add('(min-width: 769px)', () => {
    // .need-service__title-anim
    gsap.to(".need-service__txt-anim", {
      scrollTrigger: {
        // markers: true,
        trigger: ".need-service__title-anim",
        // start: "+=300 bottom",
        // end: "+=300 center",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      duration: 1,
      backgroundSize: "100% 100%",
      ease:"none",
    });
  });
  matchMedia.add('(max-width: 768px)', () => {
    // .need-service__title-anim
    gsap.to(".need-service__txt-anim", {
      scrollTrigger: {
        // markers: true,
        trigger: ".need-service__title-anim",
        start: "top bottom",
        end: "top center",
        // start: "+=100 bottom",
        // end: "+=100 center",
        scrub: 1,
      },
      duration: 1,
      backgroundSize: "100% 100%",
      ease:"none",
    });
  });
}
if (animTitleGsap) {
  // .why-service__title-anim
  gsap.to(".why-service__txt-anim", {
    scrollTrigger: {
      // markers: true,
      trigger: ".why-service__title-anim",
      start: "top bottom",
      end: "top center",
      // start: "+=300 bottom",
      // end: "+=300 center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    ease:"none",
  });
}

if (animTitleGsap) {
  // .package-service__title-anim
  gsap.to(".package-service__txt-anim", {
    scrollTrigger: {
      // markers: true,
      trigger: ".package-service__title-anim",
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "100% 100%",
    ease:"none",
  });
}
if (animTitleGsap) {

  // .steps-service__title-anim
  gsap.to(".steps-service__txt-anim", {
    scrollTrigger: {
      // markers: true,
      trigger: ".steps-service__title-anim",
      start: "top bottom",
      end: "top center",
      scrub: 1,
    },
    duration: 1,
    backgroundSize: "150% 100%",
    ease:"none",
  });
}

