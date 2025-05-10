import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { getInfoLinks, getParkData} from "./parkService.mjs";


function setParkIntro(data) {
    const introEl = document.querySelector(".intro");
    introEl.innerHTML = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
    // GRABBING THE INFORMATION SECTION
    const infoSection = document.querySelector(".info");
    // GETTING THE HTML FROM THE PARK INFO LINKS
    const htmlStrings = data.map(mediaCardTemplate);
    // PUTTING THE NEW ARRAY INTO THE HTML
    infoSection.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
}

init();





