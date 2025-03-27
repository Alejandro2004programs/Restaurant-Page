export function displayAboutPage() {
    const aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("class", "aboutContainer");
    const contentContainer = document.querySelector("#content");
    contentContainer.appendChild(aboutContainer);
    const aboutTitle = document.createElement("h2");
    aboutTitle.setAttribute("class", "aboutTitle");
    aboutTitle.textContent = "About Us";
    aboutContainer.appendChild(aboutTitle);
}

