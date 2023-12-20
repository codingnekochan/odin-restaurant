import { appendContactElements } from "./contact";

const mainContent = document.getElementById("content");
// create elements
const homeSection = document.createElement("section");
const homeHeader = document.createElement('Header');
const homeHeading = document.createElement('h1')
const homeMotto = document.createElement('p')
const homeMain = document.createElement('div')
const homeDetails = document.createElement('p')
const ctaButton = document.createElement('button')
const homeSocials = document.createElement('div');

// add element ids
homeSection.id = "home"
// add text content
homeHeading.textContent = "Nekochan's Cafe";
homeMotto.textContent = "A Purr-fect Blend of Coffee and Companionship"
homeDetails.textContent = "Indulge in the charm of our cozy cafe, where every visit is a delightful adventure."
ctaButton.textContent = "Contact us"
// add cta eventlistener
ctaButton.addEventListener('click', () =>{
    mainContent.innerHTML = ""
    appendContactElements();
    console.log('hi');
})
// add styling classes
// function to append elements
export function appendHomeElements(){
    homeHeader.appendChild(homeHeading);
    homeHeader.appendChild(homeMotto);
    homeMain.appendChild(homeDetails);
    homeMain.appendChild(ctaButton);
    homeSection.appendChild(homeHeader);
    homeSection.appendChild(homeMain);
    homeSection.appendChild(homeSocials);
    mainContent.appendChild(homeSection);
}