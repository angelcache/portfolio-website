const expCardsInfo = [
  {
    title: "comfort quest",
    img: "./img/experiences/projects1-img.png",
    info: "Tools Used: Java, Java swing",
    infoDesc: "A gui mini-game I built while learning Java. You play as a penguin friend helping a burnt-out chicken through fun mini-games: catching bananas, running in a library, and stacking clothes. Each unlocking a happy ending for chicken and a final ending once you finish all three.",
    github: "./img/icons/github-icon.png",
    date: "Aug-Dec 2024",
  },
  {
    title: "tweet feed",
    img: "./img/experiences/projects2-img.png",
    info: "Tools Used: Java, Java swing",
    infoDesc: "A Twitter-inspired prototype built with Python, Tkinter, and SQL. Features include posting, replying, retweeting, viewing tweet details, user search, and follower tracking. In a group of 3, I developed the core tweet features and designed the GUI.",
    github: "./img/icons/github-icon.png",
    date: "Aug-Dec 2024",
  },
  {
    title: "events lottery app",
    img: "./img/experiences/projects3-img.png",
    info: "Tools Used: Java, Android Studio, XML, Firebase",
    infoDesc: "Android app for managing events through a fair lottery system, built in a group of 6. Entrants can join lotteries, scan QR codes, get notified if selected, confirm attendance, and view event details. Organizers create events, run lotteries, send notifications, generate QR codes, and track participants on a map. I developed all admin features, core entrant functions (nav bar, join/leave, QR codes), and designed + coded the UI.",
    github: "./img/icons/github-icon.png",
    date: "Aug-Dec 2024",
  }
]

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
  experience = (button.innerText).toLowerCase();
  exp_buttons = [
    document.querySelector('.js-project-button'),
    document.querySelector('.js-club-button'),
    document.querySelector('.js-cert-button')
  ]

  expImages = document.querySelector(".exp-images");

  // ensure only one button is toggled at a time
  for (let exp_button of exp_buttons) {
    if (exp_button !== button) {
      exp_button.classList.remove('toggle-on');
    }
  }

  // change images
  const expConfig = {
    projects: 3,
    activities: 3,
    certificates: 1,
  }

  const count = expConfig[experience];
  const expCards = document.querySelector(".exp-cards");

  let expHTML = "";
  let expCardHTML = "";

  for (let i = count; i >= 1; i--) {
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
                  <a href="https://github.com/angelcache/chicken-gui" target="_blank" rel="noopener noreferrer">
                    <img src="${expCardsInfo[i - 1].github}" alt="github icon">
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