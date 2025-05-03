import { parkInfoTemplate, footerTemplate } from "./templates.mjs"

function setHeaderInfo(data) {
    // FIRST SECTION W/LINK
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    // TITLE
    document.title = data.fullName;
    // FIRST IMAGE
    const heroImage = document.querySelector(".hero-banner img");
    heroImage.src = data.images[0].url;
    parkInfoTemplate(data)
}

function setFooter(data) {
    const footerSection = document.querySelector("#park-footer");
    footerSection.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}