import { appendContactElements } from "./contact";
import banner from "./assets/hero.jpg";

const mainContent = document.getElementById("content");
// create elements
const homeSection = document.createElement("section");
const homeInfo = document.createElement('div');
const homeHeader = document.createElement('header');
const homeHeading = document.createElement('h1')
const homeMotto = document.createElement('p')
const homeMain = document.createElement('div')
const homeDetails = document.createElement('p')
const ctaButton = document.createElement('button')
const homeSocials = document.createElement('div');
const homeBanner = document.createElement('div')
const homeBannerImage = new Image();
homeBannerImage.src = banner;
// add element ids
homeSection.id = "home";
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
homeSection.className="home-section";
homeInfo.className = "home-info";
homeHeader.className = "home-header";
homeHeading.className = "home-heading"
homeMotto.className = " home-motto";
homeMain.className = "home-main";
ctaButton.className = "cta-button";
homeSocials.className = "home-socials";
homeBanner.className = "home-banner"
homeBannerImage.className = "home-banner-img";

// function to append elements
export function appendHomeElements(){
    homeHeader.appendChild(homeHeading);
    homeHeader.appendChild(homeMotto);
    homeMain.appendChild(homeDetails);
    homeMain.appendChild(ctaButton);
    homeInfo.appendChild(homeHeader);
    homeInfo.appendChild(homeMain);
    homeInfo.appendChild(homeSocials);
    homeSection.appendChild(homeInfo);
    homeSection.appendChild(homeBanner);
    homeBanner.appendChild(homeBannerImage)
    mainContent.appendChild(homeSection);
    // mainContent.appendChild(homeBanner);
}