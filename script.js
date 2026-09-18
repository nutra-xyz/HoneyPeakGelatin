document.addEventListener("DOMContentLoaded", function () {

  // FAQ ACCORDION

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {

      const isOpen = item.classList.contains("active");

      faqItems.forEach(function (otherItem) {

        otherItem.classList.remove("active");

        const otherAnswer = otherItem.querySelector(".faq-answer");

        if (otherAnswer) {
          otherAnswer.style.maxHeight = null;
        }

      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

    });

  });


  // SMOOTH SCROLL

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (targetId === "#") {
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


  // HEADER SHADOW ON SCROLL

  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.22)";
    } else {
      header.style.boxShadow = "none";
    }

  });


  // REVEAL SECTIONS

  const revealElements = document.querySelectorAll(
    ".benefit-card, .gallery-item, .routine-item, .section-heading"
  );

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
      "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

  });

});
