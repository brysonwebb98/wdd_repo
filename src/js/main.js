import { getParkData } from "./parkService.mjs";

// FIRST SECTION W/LINK
const parkData = getParkData();
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// TITLE
document.title = parkData.fullName;

// FIRST IMAGE
const heroImage = document.querySelector(".hero-banner img");
heroImage.src = parkData.images[0].url;

// UPDATING THE NAME, DESIGNATION, STATES
const parkName = document.querySelector(".hero-title")
parkName.innerHTML = parkData.name;

const designation = document.querySelector(".designation")
designation.innerHTML = parkData.designation;

const states = document.querySelector(".states")
states.innerHTML = parkData.states;

// DIDNT USE
// function parkInfoTemplate(info) {
//     return `<a href="/" class="hero-title">${info.name}</a>
//     <p class="hero-banner-words">
//         <span>${info.designation}</span>
//         <span>${info.states}</span>
//     </p>`;
// }


