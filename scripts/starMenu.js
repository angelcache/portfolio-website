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
  const themeIcon = document.querySelector('.theme-icon');
  themeIcon.src = "./img/icons/sun-icon.png";
}

// Event Listeners for clickable icons
theme = document.querySelector(".theme-icon");
theme.addEventListener("click", changeMode);
music = document.querySelector(".speaker-icon")
music.addEventListener("click", playAudio);
star = document.querySelector(".star");
star.addEventListener("click", () => openStarMenu('1'));
star2 = document.querySelector(".star2");
star2.addEventListener("click", () => openStarMenu('2'))

function openStarMenu(star) {
  /* When user clicks the star, it opens the Star Menu */
  const starMenu = document.querySelector(`.js-star-items${star}`); // accounts for the two star menu buttons

  if (starMenu.style.width !== "350px") {
    starMenu.style.width= "350px";
    starMenu.style.borderColor = "var(--star-outline)";
    starMenu.style.backgroundColor = "var(--star-bg-color)";
    star === "1" ? localStorage.setItem("menu", "1"): localStorage.setItem("menu", "2");
  } else {
    starMenu.style.width = "0";
    starMenu.style.borderColor= "transparent";
    starMenu.style.backgroundColor = "transparent";
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
  /* When user clicks on the theme icon, it will toggle the element from light / dark mode */
  bodyElement = document.body;
  bodyElement.classList.toggle('dark-mode');

  const starLogo = document.querySelector('.star');
  const starLogo2 = document.querySelector('.star2');

  const themeIcon = document.querySelector('.theme-icon');

  themeIcon.classList.remove("hover-effect");
  themeIcon.classList.add("theme-spin");
  themeIcon.style.pointerEvents = "none";
  
  setTimeout(() => {
    themeIcon.classList.remove("theme-spin");
    themeIcon.classList.add("hover-effect");
    themeIcon.style.pointerEvents = "auto";
  }, 2000);

  starLogo.classList.add("fade-out");
  starLogo2.classList.add("fade-out");

  setTimeout(() => {
    setStarLogo(starLogo, starLogo2)
    
    starLogo.classList.remove("fade-out");
    starLogo2.classList.remove("fade-out");
  }, 150);

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "./img/icons/moon-icon.png";
    localStorage.setItem("theme", "dark-mode");
  } else {
    themeIcon.src = "./img/icons/sun-icon.png";
    localStorage.setItem("theme", "light-mode");
  }
}

function setStarLogo(star1, star2) {
  /* When user clicks on the theme icon, it will toggle the element from light / dark mode */
  star1.src = document.body.classList.contains("dark-mode") ? "./img/deco/star-logo-dark.png"
    : "./img/deco/star-logo.png";
  star2.src = document.body.classList.contains("dark-mode") ? "./img/deco/star-logo2-dark.png"
  : "./img/deco/star-logo2.png";
}