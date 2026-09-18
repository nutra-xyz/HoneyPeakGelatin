/* =========================================
   HONEY PEAK GELATIN
   Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     FAQ ACCORDION
     ========================================= */

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {

      const currentItem = question.closest(".faq-item");

      // Close other FAQ items
      document.querySelectorAll(".faq-item").forEach(function (item) {
        if (item !== currentItem) {
          item.classList.remove("active");
        }
      });

      // Toggle current FAQ
      currentItem.classList.toggle("active");
    });
  });


  /* =========================================
     SMOOTH SCROLL
     ========================================= */

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* =========================================
     HEADER SHADOW ON SCROLL
     ========================================= */

  const header = document.querySelector(".site-header");

  function updateHeader() {
    if (!header) {
      return;
    }

    if (window.scrollY > 20) {
      header.style.boxShadow = "0 8px 30px rgba(16, 35, 63, 0.08)";
    } else {
      header.style.boxShadow = "none";
    }
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();


  /* =========================================
     SIMPLE FADE-IN EFFECT
     ========================================= */

  const animatedElements = document.querySelectorAll(
    ".benefit-card, .routine-card, .formula-item, .story-panel"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries, observerInstance) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

            observerInstance.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    animatedElements.forEach(function (element) {
      observer.observe(element);
    });

  } else {

    animatedElements.forEach(function (element) {
      element.classList.add("fade-up");
    });

  }

});
