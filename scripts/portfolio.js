
// Saves the state so it remains the same when you reload
const savedTheme = localStorage.getItem("theme");
const savedMenu = localStorage.getItem("menu");
const savedMusic = localStorage.getItem("music");

if (savedMenu === "1" || savedMenu === "2") {
  const starMenu = document.querySelector(`.js-star-items${savedMenu}`);
  starMenu.style.width= "350px";
  starMenu.style.borderColor = "var(--star-outline)";
  starMenu.style.backgroundColor = "var(--star-bg-color)";
}

if (savedMusic === "music-on") {
  document.querySelector(".lofi-audio").play();
  document.querySelector(".speaker-icon").setAttribute('src', "img/icons/speaker-icon.png");
}

if (savedTheme === "light-mode") {
  document.body.classList.remove("dark-mode");
  star = document.querySelector(".star");
  star2 = document.querySelector(".star2");
  setStarLogo(star, star2);
}

// Event Listeners for clickable icons
theme = document.querySelector(".sun-icon");
theme.addEventListener("click", changeMode);
music = document.querySelector(".speaker-icon")
music.addEventListener("click", playAudio);
star = document.querySelector(".star");
star.addEventListener("click", () => openStarMenu('1'));
star2 = document.querySelector(".star2");
star2.addEventListener("click", () => openStarMenu('2'))

const experienceButtons = document.querySelectorAll(".exp-buttons button");

experienceButtons.forEach(button => {
  button.addEventListener("click", (e) => changeContent(e.target))
})

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
  for (i = 1; i <= 3; i++) {
    expImages.innerHTML = `
    <div class="box-design">
      <img class="pink-heart" src="img/deco/pink-heart.png">
      <img class="js-box-1 project-boxes" src="img/experiences/${experience}1-img.png" alt="empty">
    </div>

    <img class="js-box-2 project-boxes" src="img/experiences/${experience}2-img.png" alt="empty">

    <div class="box-design">
      <img class="blue-star" src="img/deco/blue-star.png">
      <img class="js-box-3 project-boxes" src="img/experiences/${experience}3-img.png">
    </div>`
  }
}

function openStarMenu(star) {
  /* When user clicks the star, it opens the Star Menu */
  const starMenu = document.querySelector(`.js-star-items${star}`); // accounts for the two star menu buttons

  if (starMenu.style.width !== "350px") {
    starMenu.style.width= "350px";
    starMenu.style.borderColor = "var(--star-outline)";
    starMenu.style.backgroundColor = "var(--star-bg-color)";
    star === "1" ? localStorage.setItem("menu", "1"): localStorage.setItem("menu", "2");
  } else {
    starMenu.style.width= "0";
    starMenu.style.borderColor= "transparent";
    starMenu.style.backgroundColor = "white";
    localStorage.setItem("menu", "0");
  }
}

function playAudio() {
  /* When user clicks on the speakerIcon, it will play/mute the lofi music and change the icon to speaker/mute  icon */
  audio = document.querySelector('.lofi-audio');
  speakerIcon = document.querySelector('.speaker-icon')

  audio.classList.toggle("music-on");

  if (audio.classList.contains("music-on")) {
    audio.play();
    speakerIcon.setAttribute('src', "img/icons/speaker-icon.png");
    localStorage.setItem("music", "music-on");
  } else {
    audio.pause();
    speakerIcon.setAttribute('src', "img/icons/mute-icon.png");
    localStorage.setItem("music", "");
  }
}

function changeMode() {
  /* When user clicks on the sun icon, it will toggle the element from light / dark mode */
  bodyElement = document.body;
  bodyElement.classList.toggle('dark-mode');

  const starLogo = document.querySelector('.star');
  const starLogo2 = document.querySelector('.star2');
  starLogo.classList.add("fade-out");
  starLogo2.classList.add("fade-out");

  setTimeout(() => {

    setStarLogo(starLogo, starLogo2)
    
    starLogo.classList.remove("fade-out");
    starLogo2.classList.remove("fade-out");
  }, 150);

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "light-mode");
  }
}

function setStarLogo(star1, star2) {
  /* When user clicks on the sun icon, it will toggle the element from light / dark mode */
  star1.src = document.body.classList.contains("dark-mode") ? "./img/deco/star-logo-dark.png"
    : "./img/deco/star-logo.png";
  star2.src = document.body.classList.contains("dark-mode") ? "./img/deco/star-logo2-dark.png"
  : "./img/deco/star-logo2.png";
}