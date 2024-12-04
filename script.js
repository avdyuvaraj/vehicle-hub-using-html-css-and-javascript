document.addEventListener("DOMContentLoaded", () => {
    // Add animation effects to cards
    const cards = document.querySelectorAll(".model-card");
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
      });
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      });
    });
  
    // Filtering bikes by brand
    const brandSections = document.querySelectorAll(".brands");
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = e.target.getAttribute("href").split("#")[1];
        if (targetId) {
          e.preventDefault();
          const targetSection = document.getElementById(targetId);
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  