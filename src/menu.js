export function displayMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("class", "menuContainer");
    const contentContainer = document.querySelector("#content");
    contentContainer.appendChild(menuContainer);
    const menuTitle = document.createElement("h2");
    menuTitle.setAttribute("class", "menuTitle");
    menuTitle.textContent = "Menu";
    menuContainer.appendChild(menuTitle);
}