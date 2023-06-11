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

// GSAP Animation title ======================
const titleElements = document.querySelectorAll(".title-anim__txt");
if (titleElements.length > 0) {
  titleElements.forEach((titleElement) => {
    gsap.to(titleElement, {
      scrollTrigger: {
        trigger: titleElement,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      duration: 1,
      backgroundSize: "100% 100%",
      ease: "none",
    });
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

// SERVICES PAGE opacity img on hover events ======================================================
const listNeedServiceTxt = document.querySelectorAll('.list-need-service__txt');
const gifImg = document.querySelectorAll('.gif-img');
if (listNeedServiceTxt) {
  listNeedServiceTxt.forEach((textItem, index) => {
    textItem.addEventListener('mouseenter', () => {
      if (index < gifImg.length) {
        gifImg[index].classList.add('_active');
      }
    });

    textItem.addEventListener('mouseleave', () => {
      if (index < gifImg.length) {
        gifImg[index].classList.remove('_active');
      }
    });
  });
}