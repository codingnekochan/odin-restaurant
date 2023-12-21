//page heading and navigation tabs
const navigation = document.getElementById("nav");
// create elements
const navSection = document.createElement("div");
const tabSection = document.createElement("div");
const mainHeading = document.createElement("span");
const homeButton = document.createElement("button");
const aboutButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");
const line = document.createElement("hr");
// add element ids
homeButton.id = "home-btn";
aboutButton.id = "about-btn";
menuButton.id = "menu-btn";
contactButton.id = "contact-btn";
// text content for navigation
mainHeading.textContent = "Nekochan's Cafe";
homeButton.textContent = "Home";
aboutButton.textContent = "About";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";
// adding classes for styling
navSection.className = "nav-section";
tabSection.className = "tabs-section";
// append elements to the navigation;
export function appendNavElements() {
  navSection.appendChild(mainHeading);
  navSection.appendChild(tabSection);
  tabSection.appendChild(homeButton);
  tabSection.appendChild(aboutButton);
  tabSection.appendChild(menuButton);
  tabSection.appendChild(contactButton);
  navigation.appendChild(navSection);
  navigation.appendChild(line);

}


