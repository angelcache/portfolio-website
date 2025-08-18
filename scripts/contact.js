const form = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status")

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/myzpaenn", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    formStatus.innerText = "Message sent !"

    // Message clears after 5 seconds
    setTimeout(() => {
      formStatus.innerText = "";
    }, 3000);

    form.reset();
  } else {
    formStatus.innerText = "Failed to send. Try again!"

    // Message clears after 5 seconds
    setTimeout(() => {
      formStatus.innerText = "";
    }, 4000);
  }
})