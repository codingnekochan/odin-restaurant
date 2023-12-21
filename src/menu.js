const mainContent = document.getElementById('content');
// create elements
const menuSection = document.createElement('section');
menuSection.id = "menu"
    // function to append elements

  export function appendMenuElements() {
   mainContent.appendChild(menuSection);

    for (let i = 1; i <= 4; i++) {
      const menuItem = document.createElement("div");
      menuItem.className = "menuItem";
      const menuFood = document.createElement("div");
      const menuDetail = document.createElement("div");
      const foodName = document.createElement("h3");
      const foodDetail = document.createElement("p");
      // add element ids
     
      menuItem.id = `menuitem-${i}`;
     //appending 
      menuDetail.appendChild(foodName);
      menuDetail.appendChild(foodDetail);
      menuItem.appendChild(menuDetail);
      menuItem.appendChild(menuFood);
      // add text content
      switch (menuItem.id) {
        case "menuitem-1":
          foodName.textContent = "Pizza";
          foodDetail.textContent = "";
          break;
        case "menuitem-1":
          foodName.textContent = "";
          foodDetail.textContent = "";
          break;
        case "menuitem-1":
          foodName.textContent = "";
          foodDetail.textContent = "";
          break;
        case "menuitem-1":
          foodName.textContent = "";
          foodDetail.textContent = "";
          break;
      }
    }
          menuSection.appendChild(menuItem);

}

    // add styling classes

