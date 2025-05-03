import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();

function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
    // GRABBING THE INFORMATION SECTION
    const infoSection = document.querySelector(".info");
    // GETTING THE HTML FROM THE PARK INFO LINKS
    const htmlStrings = data.map(mediaCardTemplate);
    // PUTTING THE NEW ARRAY INTO THE HTML
    infoSection.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);

