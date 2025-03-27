export function displayHomePage() {
    const homeContainer = document.createElement("div");
    homeContainer.setAttribute("class", "homeContainer");
    const title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = "Restaurant Page";
    const openHoursHeader = document.createElement("h2");
    openHoursHeader.setAttribute("class", "openHoursHeader");
    openHoursHeader.textContent = "Open hours:"
    const contentContainer = document.querySelector("#content");
    contentContainer.appendChild(homeContainer);
    homeContainer.appendChild(title);
    homeContainer.appendChild(openHoursHeader);
}