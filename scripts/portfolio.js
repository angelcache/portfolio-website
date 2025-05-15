// when clicking projects: shows projects
// when clicking activities shows activities
// when clicking certificates: shows certificates

// what we need is js class for each buttoon and the little squares that will contiant he image

// so everytime we click on one of the buttons, the three images will change as well as the text that will be on top of it

// so for now lets add some pre defined images, get those images

function changeContent(button, experience) {
  /* Changes the content of the experience boxes to desired image */

  button.classList.add('toggle-on');

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

// Okay for the star menu, every time we click on the star, the star menu will appear

// to make this happen we will give it a non-existent width and then when the star, is clicked its width will be put to normal

// we would use the transition funcitonality to ensure a smooth change

function openStarMenu(star) {
  const starMenu = document.querySelector(`.js-star-items${star}`); // accounts for the two star menu buttons
  console.log(`.js-star-items${star}`)

  console.log(starMenu.style.width);

  if (starMenu.style.width !== "350px") {
    starMenu.style.width= "350px";
    starMenu.style.borderColor = "var(--star-outline)";
    starMenu.style.backgroundColor = "var(--star-bg-color)";
  } else {
    starMenu.style.width= "0";
    starMenu.style.borderColor= "transparent";
    starMenu.style.backgroundColor = "white";
  }

  //350
  //2.5
  //border-color: var(--star-outline);
}

// Okay now for the audio, it will play the lofi music, everytime we click the speaker icon

function playAudio() {
  audio = document.querySelector('.lofi-audio');
  speakerIcon = document.querySelector('.speaker-icon')

  audio.classList.toggle("music-on");

  if (audio.classList.contains("music-on")) {
    audio.pause();
     speakerIcon.setAttribute('src', "img/icons/mute-icon.png");
  } else {
     audio.play();
     speakerIcon.setAttribute('src', "img/icons/speaker-icon.png");
  }
}
