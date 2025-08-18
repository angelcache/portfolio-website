document.querySelectorAll(".exp-images a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    const overlay = document.querySelector(".overlay");
    if (target) target.classList.add("active");
    overlay.classList.add("active");
  })
})