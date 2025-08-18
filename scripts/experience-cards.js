let target = "";
const overlay = document.querySelector(".overlay");
const exit = document.querySelector(".exit");

document.querySelectorAll(".exp-images a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    target = document.querySelector(link.getAttribute("href"));

    if (target) target.classList.add("active");
    overlay.classList.add("active");
  })
})

overlay.addEventListener("click", () => {
  target.classList.remove("active");
  overlay.classList.remove("active");
})

exit.addEventListener("click", () => {
  target.classList.remove("active");
  overlay.classList.remove("active");
})