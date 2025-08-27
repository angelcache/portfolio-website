import { projectCardsInfo } from "./data/projects-data.js";
import { activitiesCardsInfo } from "./data/activities-data.js";
import { studiesCardsInfo } from "./data/studies-data.js";

setUpListeners();

function setUpListeners() {
  let target = null;
  const experienceButtons = document.querySelectorAll(".exp-buttons button");
  const overlay = document.querySelector(".overlay");

  experienceButtons.forEach(button => {
    button.addEventListener("click", (e) => changeContent(e.target))
  })

  document.querySelectorAll(".exp-images a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      target = document.querySelector(link.getAttribute("href"));

      if (target) target.classList.add("active");
      overlay.classList.add("active");
    })
  })

  overlay.addEventListener("click", () => {
    if (target) target.classList.remove("active");
    overlay.classList.remove("active");
    target = null;
  })

  const exits = document.querySelectorAll(".exit");

  
  exits.forEach((exit) => {
    exit.addEventListener("click", () => {
      if (target) target.classList.remove("active");
        overlay.classList.remove("active");
        target = null;
    })
  });

}

function changeContent(button) {
  /* Changes the content of the experience boxes to desired image */
  button.classList.add('toggle-on');
  const experience = (button.innerText).toLowerCase();
  const exp_buttons = [
    document.querySelector('.js-project-button'),
    document.querySelector('.js-club-button'),
    document.querySelector('.js-cert-button')
  ]

  const expImages = document.querySelector(".exp-images");

  // ensure only one button is toggled at a time
  for (let exp_button of exp_buttons) {
    if (exp_button !== button) {
      exp_button.classList.remove('toggle-on');
    }
  }

  // change images
  const expConfig = {
    projects: 7,
    activities: 3,
    studies: 3,
  }

  const count = expConfig[experience];
  const expCards = document.querySelector(".exp-cards");

  let expHTML = "";
  let expCardHTML = "";

  for (let i = count; i >= 1; i--) {
    let expCardsInfo = []

    if (experience == "projects") {
      expCardsInfo = projectCardsInfo;
    } else if (experience == "activities") {
      expCardsInfo = activitiesCardsInfo;
    } else {
      expCardsInfo = studiesCardsInfo;
    }

    console.log(expCards)
    expCardHTML += `
      <div class="exp-cards">
          <div id="js-box-${i}" class="exp-card">
            <div class="highlighter">
              ${expCardsInfo[i - 1].title}
            </div>
            <div class="exp-card-info">
              <img src="${expCardsInfo[i - 1].img}" alt="">
              <div class="text">
                <p class="exp-info-tools">${expCardsInfo[i - 1].info}</p>
                <p class="exp-info-text">${expCardsInfo[i - 1].infoDesc}</p>

                <div class="exp-card-extra-info">
                  <a href="${expCardsInfo[i - 1].link}" target="_blank" rel="noopener noreferrer">
                    <img src="${expCardsInfo[i - 1].icon}" alt="link icon">
                  </a>
                  <p>${expCardsInfo[i - 1].date}</p>
                </div>
                <p class="last-exp">&lt</p>
                <p class="next-exp">&gt</p>
                <p class="exit">X</p>
              </div>
            </div>
          </div>
        </div>
    `
    expHTML += `
      <a href="#js-box-${i}">
        <div class="box-design">
          ${count <= 3 && i === count ? '<img class="pink-heart" src="img/deco/pink-heart.png">' : ""}
          ${count > 3 && i === 1 ? '<img class="pink-heart" src="img/deco/pink-heart.png">' : ""}
          ${count === 3 && i === 1 ? '<img class="blue-star" src="img/deco/blue-star.png">' : ""}

          ${count > 3 && i === count - 2 ? '<img class="blue-star" src="img/deco/blue-star.png">' : ""}
          
          <img class="js-box-${i} project-boxes" src="img/experiences/${experience}${i}-img.png" alt="${experience} ${i}">
        </div>
      </a>
    `
  }

  expCards.innerHTML = expCardHTML;
  expImages.innerHTML = expHTML;
  setUpListeners();
}

function generateCard() {

}