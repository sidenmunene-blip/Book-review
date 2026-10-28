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

