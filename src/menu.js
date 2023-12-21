import rice from './assets/rice.jpg';
import lasagna from './assets/lasagna.jpg';
import ramen from './assets/ramen.jpg';
import quiche from './assets/quiche.jpg'


const mainContent = document.getElementById("content");
// create elements
const menuSection = document.createElement("section");
menuSection.id = "menu";
// function to append elements
export function appendMenuElements() {
  menuSection.innerHTML = "";
  for (let i = 1; i <= 4; i++) {
    let menuItem = document.createElement("div");
    const menuFood = document.createElement("div");
    const menuDetail = document.createElement("div");
    const foodName = document.createElement("h3");
    const foodDetail = document.createElement("p");
    const foodImage = new Image();
    // add element ids
    menuItem.id = `menuitem-${i}`;
    // add styling classes
    menuItem.className = "menuItem";
    menuFood.className = "menu-food-image";
    foodName.className = "food-name";
    foodDetail.className = "food-detail";
    menuDetail.className = "menu-detail";
    //appending elements
    menuFood.appendChild(foodImage);
    menuDetail.appendChild(foodName);
    menuDetail.appendChild(foodDetail);
    menuItem.appendChild(menuFood);
    menuItem.appendChild(menuDetail);
    menuSection.appendChild(menuItem);
    // add text content
    switch (menuItem.id) {
      case "menuitem-1":
        foodImage.src = rice;
        foodName.textContent = "Rice";
        foodDetail.textContent = "Rice, potatoes, carrots, beef, peas, green chili";
        break;
      case "menuitem-2":
        foodImage.src = lasagna;
        foodName.textContent = "Lasagna";
        foodDetail.textContent = "Beef, Ricotta cheese, Mozzarella cheese, spinach, mushrooms, sausage, Parmesan cheese";
        break;
      case "menuitem-3":
        foodImage.src = ramen;
        foodName.textContent = "Ramen";
        foodDetail.textContent = "Ramen noodles, scallions, Nori, eggs, carrots, onions, sliced beef";
        break;
      case "menuitem-4":
        foodImage.src = quiche;
        foodName.textContent = "Quiche";
        foodDetail.textContent = "Cheddar cheese, chicken, sauteed vegetables, smoked salmon";
        break;
    }
  }

  mainContent.appendChild(menuSection);
}
