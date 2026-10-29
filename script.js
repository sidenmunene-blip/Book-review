const continueButton = document.querySelector("#continue");

if (continueButton) {
  continueButton.addEventListener("mouseenter", () => {
    continueButton.style.transform = "scale(1.2)";
  });

  continueButton.addEventListener("mouseleave", () => {
    continueButton.style.transform = "scale(1.0)";
  })

  continueButton.addEventListener("click", () => {
    window.location.href = "Home.html";
  });
}

const bookcard = document.querySelector("#book-card")

if (bookcard) {
    bookcard.addEventListener("mouseenter", () => {
    bookcard.style.transform = "scale(1.5)";
  });

    bookcard.addEventListener("mouseleave", () => {
    bookcard.style.transform = "scale(1.0)";
  })

    bookcard.addEventListener("click", () => {
    window.location.href = "Home.html";
  });
}