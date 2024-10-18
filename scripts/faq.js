function initFAQ() {
  const faqContainer = document.getElementById("faq");

  if (!faqContainer) return; // Sortir si le conteneur FAQ n'existe pas

  faqContainer.addEventListener("click", function (event) {
    const header = event.target.closest(".faq-card-header");
    if (!header) return; // Sortir si le clic n'était pas sur un en-tête FAQ

    const faqCard = header.closest(".faq-card");
    const content = faqCard.querySelector(".faq-card-content");
    const svgIcon = header.querySelector(".faq-svg");

    // Basculer l'affichage du contenu
    const isContentVisible =
      content.style.display === "none" || content.style.display === "";
    content.style.display = isContentVisible ? "block" : "none";

    // Basculer la rotation du SVG
    svgIcon.classList.toggle("rotate");

    // Basculer la classe CSS du header pour changer l'arrière-plan
    header.classList.toggle("active-header", isContentVisible);

    console.log(isContentVisible ? "Content showed" : "Content hidden");
  });
}

// Fonction pour initialiser la FAQ après le chargement du contenu
function initFAQAfterLoad() {
  const faqTab = document.getElementById("faq-tab");

  if (faqTab) {
    faqTab.addEventListener("shown.bs.tab", function (event) {
      // Initialiser la FAQ après un court délai pour s'assurer que le contenu est chargé
      setTimeout(initFAQ, 100);
    });
  }

  // Initialiser également la FAQ si elle est déjà visible au chargement de la page
  if (document.querySelector("#faq.active")) {
    initFAQ();
  }
}

// Exécuter initFAQAfterLoad une fois que le DOM est complètement chargé
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFAQAfterLoad);
} else {
  initFAQAfterLoad();
}
