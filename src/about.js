const mainContent = document.getElementById("content");
// create elements
const aboutSection = document.createElement("section");
const aboutHeading = document.createElement("h2");
const aboutDetails = document.createElement("p");
const ctaButton = document.createElement("button");
const ctaLink = document.createElement("a");
// add element ids
aboutSection.id = "about";
// text content;
aboutHeading.textContent = "We are Nekochan's Cafe";
aboutDetails.textContent =
  "A delightful blend of aromatic coffee, cozy ambiance, and playful feline companions. Our cafe is a haven for coffee lovers and cat enthusiasts alike. Join us for a unique experience where exceptional brews meet the charm of adorable resident cats. Indulge in the joy of coffee, books, and feline company at Nekochan's Cafe.";
ctaLink.textContent = "Check out our Menu!";
// add styling classes
aboutHeading.className = "about-heading";
aboutDetails.className = "about-details";
ctaButton.className = "cta-button";
// function to append elements
export function appendAboutElements() {
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutDetails);
  aboutSection.appendChild(ctaButton);
  ctaButton.appendChild(ctaLink);
  mainContent.appendChild(aboutSection);
}

