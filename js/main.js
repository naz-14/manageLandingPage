(function () {
  "use sctrict";
  window.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      let testimonialsSlider = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        roundLengths: true,
        slidesPerView: 3,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
      });
      testimonialsSlider.init();
    } else {
      let testimonialsSlider = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        roundLengths: true,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
      });
      testimonialsSlider.init();
    }

    //menu functions
    const menuBtn = document.querySelector(".hamburguer button");
    const iconMenuBtn = document.querySelector(".hamburguer button img");
    const navegation = document.querySelector("#navegation");
    const backgroundActiveMenu = document.querySelector(".background");
    menuBtn.addEventListener("click", showMenu);

    function showMenu() {
      navegation.classList.toggle("active");
      backgroundActiveMenu.classList.toggle("active");
      if (navegation.classList.contains("active")) {
        iconMenuBtn.setAttribute("src", "images/icon-close.svg");
        window.addEventListener("scroll", closeIfScroll);
      } else {
        iconMenuBtn.setAttribute("src", "images/icon-hamburger.svg");
        window.removeEventListener("scroll", closeIfScroll);
      }
    }
    function closeIfScroll() {
      navegation.classList.remove("active");
      backgroundActiveMenu.classList.remove("active");
      iconMenuBtn.setAttribute("src", "images/icon-hamburger.svg");
    }

    const newsletterSubmit = document.querySelector("#newsletterGo");
    const newsletterEmail = document.querySelector("#newsletter-email");
    const errorDiv = document.querySelector(".errorContainer");

    newsletterSubmit.addEventListener("click", emailValidation);

    function emailValidation() {
      const newsletterEmailContent = document.querySelector("#newsletter-email")
        .value;
      if (newsletterEmailContent.length === 0) {
        newsletterEmail.setAttribute("class", "error");
        errorDiv.style.display = "inline-block";
      } else {
        console.log("holis");
      }
    }
  });
})();
