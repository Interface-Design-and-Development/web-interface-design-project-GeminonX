const learnMoreBtn = document.getElementById("learnMoreBtn");
const flavorSection = document.getElementById("flavorInfo");

learnMoreBtn.addEventListener("click", () => {
    if(flavorSection.style.display === "none" || flavorSection.style.display === ""){
        flavorSection.style.display = "block";
        flavorSection.scrollIntoView({behavior: "smooth"});
        learnMoreBtn.textContent = "Hide Info"
    } else {
        flavorSection.style.display = "none";
        learnMoreBtn.textContent = "Learn More!";
    }
});