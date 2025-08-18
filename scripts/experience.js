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
  const expConfig = {
    projects: 3,
    activities: 3,
    certificates: 1,
  }

  const count = expConfig[experience];

  let experienceHTML = "";
  for (let i = count; i >= 1; i--) {
    experienceHTML += `
      <div class="box-design">
        ${count <= 3 && i === count ? '<img class="pink-heart" src="img/deco/pink-heart.png">': ""}
        ${count > 3 && i === 1 ? '<img class="pink-heart" src="img/deco/pink-heart.png">': ""}
        ${count === 3 && i === 1 ? '<img class="blue-star" src="img/deco/blue-star.png">': ""}

        ${count > 3 && i === count - 2 ? '<img class="blue-star" src="img/deco/blue-star.png">': ""}
        
        <img class="js-box-${i} project-boxes" src="img/experiences/${experience}${i}-img.png" alt="${experience} ${i}">
      </div>
    `
  }

  console.log(experienceHTML);

  expImages.innerHTML = experienceHTML;
}