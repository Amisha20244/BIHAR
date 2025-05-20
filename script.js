window.addEventListener("scroll", () => {
    const artsSection = document.getElementById("arts");
    if (window.scrollY > artsSection.offsetTop - 100) {
      console.log("You're exploring Bihar's amazing arts!");
    }
  });
  