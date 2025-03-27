// const displayHomePage = function() {
//     const display = function() {
//         const homeContainer = document.createElement("div");
//         homeContainer.setAttribute("class", "homeContainer");
//         const title = document.createElement("h1");
//         title.setAttribute("class", "title");
//         title.textContent = "Restaurant Page";
//         const openHoursHeader = document.createElement("h2");
//         openHoursHeader.setAttribute("class", "openHoursHeader");
//         openHoursHeader.textContent = "Open hours:"
//         const contentContainer = document.querySelector("#content");
//         contentContainer.appendChild(homeContainer);
//         indexContainer.appendChild(title);
//         indexContainer.appendChild(openHoursHeader);
//     }
//     return {display};
    
// }

function displayHomePage() {
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
        indexContainer.appendChild(title);
        indexContainer.appendChild(openHoursHeader);
}

export {displayHomePage};

