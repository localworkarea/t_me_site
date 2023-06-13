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


// === FORMS BRIEF =================================================================
const formBrief = document.querySelector('.form');
const formBlocks = Array.from(document.querySelectorAll('.form__block'));
const nextButton = document.querySelector('.form__btn-next');
const submitButton = document.querySelector('.form__btn-submit');
const counter = document.querySelector('.brief__counter');
const progress = document.querySelector('.brief__progress');

if (formBrief) {
  let currentBlock = 0;
  
  function showCurrentBlock() {
    formBlocks.forEach((block, index) => {
      if (index === currentBlock) {
        block.classList.remove('_hidden');
      } else {
        block.classList.add('_hidden');
      }
    });
  }
  
  function updateCounter() {
    counter.textContent = currentBlock + 1;
  }
  
  function updateProgress() {
    if (progress) {
      const progressPercentage = ((currentBlock + 1) / formBlocks.length) * 100;
      progress.querySelector('.brief__progress-bar').style.width = `${progressPercentage}%`;
    }
  }
  
  
  function checkFieldsValidity() {
    const currentFormFields = Array.from(formBlocks[currentBlock].querySelectorAll('input[required]'));
    const currentFormCheckboxes = Array.from(formBlocks[currentBlock].querySelectorAll('input[type="checkbox"]'));
    const requiredFieldsFilled = currentFormFields.every((field) => field.value.trim() !== '');
    const checkboxChecked = currentFormCheckboxes.some((checkbox) => checkbox.checked);
    
    return requiredFieldsFilled && (currentFormCheckboxes.length === 0 || checkboxChecked);
  }
  
  function handleNextButtonClick() {
    if (checkFieldsValidity()) {
      currentBlock++;
      if (currentBlock >= formBlocks.length - 1) {
        nextButton.classList.add('_hidden');
        submitButton.classList.remove('_hidden');
      }
      showCurrentBlock();
      updateCounter();
      updateProgress();
    }
  }
  
  
  submitButton.addEventListener('click', function (event) {
    if (submitButton.disabled) {
      event.preventDefault();
    }
  });
  
  if (nextButton) {
    nextButton.addEventListener('click', handleNextButtonClick);
  }
  if (formBlocks.length > 0 && formBlocks[0].classList.contains('_hidden')) {
    formBlocks[0].classList.remove('_hidden');
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    
    const lastFormBlock = formBlocks[formBlocks.length - 1];
    const lastFormCheckboxes = Array.from(lastFormBlock.querySelectorAll('input[type="checkbox"]'));
    lastFormCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const checkboxChecked = lastFormCheckboxes.some((checkbox) => checkbox.checked);
      
        if (checkboxChecked) {
          submitButton.classList.remove('disabled');
        } else {
          submitButton.classList.add('disabled');
        }
      });
    });
  });
}