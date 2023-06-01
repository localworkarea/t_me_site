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
gsap.to(".title-anim__txt-black", {
  scrollTrigger: {
    trigger: ".brands__title-anim",
    // markers: true,
    start: "bottom bottom",
    scrub: 1,
  },
  duration: 1,
  backgroundSize: "150% 100%",
});
gsap.to(".title-anim__txt-white", {
  scrollTrigger: {
    trigger: ".promo__title",
    // markers: true,
    start: "bottom bottom",
    scrub: 1,
  },
  duration: 1,
  backgroundSize: "150% 100%",
});