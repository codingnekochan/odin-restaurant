const mainContent = document.getElementById("content");
// create elements
const contactSection = document.createElement("section");
const contactHeading = document.createElement("h2");
const contactAddress = document.createElement("p");
const contactInfo = document.createElement("p");
const contactHours = document.createElement("p");
// add element ids
contactSection.id = "contact";
// add text content
contactHeading.textContent = "Reach us here";
contactAddress.textContent =
  "Nekochan's Cafe 123 Whisker Lane Purrington City, CA 98765 United States";
contactInfo.textContent = "Phone: (555) 123-4567 Email: info@nekochanscafe.com";
contactHours.textContent =
  "Business Hours: Monday to Friday: 8:00 AM - 6:00 PM Saturday and Sunday: 9:00 AM - 5:00 PM";

// add styling classes
// function to append elements
export function appendContactElements() {
  mainContent.appendChild(contactSection);
  contactSection.appendChild(contactHeading);
  contactSection.appendChild(contactAddress);
  contactSection.appendChild(contactInfo);
  contactSection.appendChild(contactHours);
}
