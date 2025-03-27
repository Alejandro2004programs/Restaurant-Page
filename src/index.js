import "./styles.css";
import {displayHomePage} from "./home.js";
import {displayMenuPage} from "./menu.js";
import {displayAboutPage} from "./about.js";

displayHomePage();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    if(button.textContent == "Home") {
        button.addEventListener("click", () => {
            const divToRemove = document.querySelector("div > div");
            divToRemove.remove();
            displayHomePage();
        });
    }
    else if (button.textContent == "Menu") {
        button.addEventListener("click", () => {
            const divToRemove = document.querySelector("div > div");
            divToRemove.remove();
            displayMenuPage();
        });
    }
    else if (button.textContent == "About") {
        button.addEventListener("click", () => {
            const divToRemove = document.querySelector("div > div");
            divToRemove.remove();
            displayAboutPage();
        });
    }
});