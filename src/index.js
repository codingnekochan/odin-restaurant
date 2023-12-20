import {appendNavElements}  from "./nav";
import {appendAboutElements}  from "./about";
import {appendContactElements} from "./contact";
import {appendHomeElements} from "./home";
import { appendMenuElements } from "./menu";
import './styles.css';



const pageBody = document.querySelector('body')
const mainContent = document.getElementById('content');
const navigation = document.getElementById("nav");
// append main sections
pageBody.insertBefore(navigation, mainContent);
appendNavElements();
appendHomeElements();
// tab switching events
const tabs = document.querySelectorAll('button');
tabs.forEach((tab)=>{
  tab.addEventListener("click", switchTabs);

})
function switchTabs(e){
    mainContent.innerHTML = "";
    switch (e.target.id) {
      case "about-btn":
        appendAboutElements();
        break;
      case "contact-btn":
        appendContactElements();
        break;
      case "home-btn":
        appendHomeElements();
        break;
      case "menu-btn":
        appendMenuElements();
        break;
      default:
        appendHomeElements();
        break;
    }
}
