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
      <img class="pink-heart" src="img/pink-heart.png">
      <img class="js-box-1 project-boxes" src="img/${experience}1-img.png" alt="empty">
    </div>

    <img class="js-box-2 project-boxes" src="img/${experience}2-img.png" alt="empty">

    <div class="box-design">
      <img class="blue-star" src="img/blue-star.png">
      <img class="js-box-3 project-boxes" src="img/${experience}3-img.png">
    </div>`
  }
}

// Okay for the star menu, every time we click on the star, the star menu will appear

// to make this happen we will give it a non-existent width and then when the star, is clicked its width will be put to normal

// we would use the transition funcitonality to ensure a smooth change

function openStarMenu() {
  starButton = document.querySelector('.js-star-items');
}
