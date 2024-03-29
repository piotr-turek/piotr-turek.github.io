let hamburgerIsOpened = false;
let hamburgerButton = document.getElementById("hamburger__click");
let navigationList = document.getElementById("navigation__click");
let logo = document.getElementById("header__logo__click");
function handleHamburgerButton() {
  if (hamburgerIsOpened) {
    hamburgerButton.classList.remove("hamburger--active");
    navigationList.classList.remove("navigation--active");
    logo.classList.remove("header__logo--active");
    hamburgerIsOpened = false;
  } else {
    hamburgerButton.classList.add("hamburger--active");
    navigationList.classList.add("navigation--active");
    logo.classList.add("header__logo--active");
    hamburgerIsOpened = true;
  }
}

function closeHamburger() {
  hamburgerButton.classList.remove("hamburger--active");
  navigationList.classList.remove("navigation--active");
  logo.classList.remove("header__logo--active");
  hamburgerIsOpened = false;
}

// let i = 0;
// let isDeleting = false;
// let text = "freelancerem";
// const delay = 3000;

// const typing = setInterval(() => {
//   const animatedText = document.querySelector(".animated-text");

//   if (isDeleting) {
//     animatedText.textContent = text.substring(0, i);
//     i--;
//     if (i === -1) {
//       isDeleting = false;
//       text = text === "freelancerem" ? "designerem" : "freelancerem";
//       i = 0;
//     }
//   } else {
//     if (i < text.length) {
//       animatedText.textContent += text[i];
//       i++;
//     }
//     if (i === text.length) {
//       setTimeout(() => {
//         isDeleting = true;
//       }, delay);
//     }
//   }
// }, 50);

// PROJECTS CARRUSEL
const slides = document.querySelectorAll(".slide");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
let currentSlide = 0;

previousButton.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  updateSlidePosition();
});

nextButton.addEventListener("click", function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlidePosition();
});

function updateSlidePosition() {
  let translationValue = -100 * currentSlide + "%";
  slides.forEach((slide) => {
    slide.style.transform = "translateX(" + translationValue + ")";
  });
}
// Portfolio
const portfolioSection = document.getElementById("portfolio");
const frontend = document.getElementById("portfolio__left");
const graphic = document.getElementById("portfolio__right");
const frontendContainer = document.getElementById("websites");
const graphicContainer = document.getElementById("graphics");
let active = "none";

frontend.addEventListener("click", portfolioSwitchToFrontend);
graphic.addEventListener("click", portfolioSwitchToGraphic);

function portfolioSwitchToFrontend() {
  active = "frontend";
  portfolioChangeClasses();
}

function portfolioSwitchToGraphic() {
  active = "graphic";
  portfolioChangeClasses();
}

function portfolioChangeClasses() {
  portfolioSection.classList.add("active");
  if (active === "frontend") {
    graphic.classList.remove("active");
    frontend.classList.add("active");

    graphicContainer.classList.add("hidden");
    setTimeout(() => {
      frontendContainer.classList.remove("hidden");
      graphicContainer.classList.add("hidden"); //prevent displaying both sections after pressing both buttons in less than 1second
    }, 1000);
  }
  if (active === "graphic") {
    frontend.classList.remove("active");
    graphic.classList.add("active");

    frontendContainer.classList.add("hidden");
    setTimeout(() => {
      graphicContainer.classList.remove("hidden");
      frontendContainer.classList.add("hidden"); //prevent displaying both sections after pressing both buttons in less than 1second
    }, 1000);
  }
}

console.log(graphicContainer);
console.log(frontendContainer);

const observer = new IntersectionObserver((entries) => {
  let delay = 0.2;

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("animated");
      }, delay * 1000);
      delay += 0.2;
    }
  });
});

// Pobierz wszystkie elementy <progress> i przekaż je do obserwatora
const progressElements = document.querySelectorAll(".bars-container progress");
progressElements.forEach((progressElement) => {
  observer.observe(progressElement);
});
