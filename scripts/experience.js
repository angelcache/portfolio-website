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