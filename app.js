const submitBtn = document.querySelector(".submit-button");
const ratingSection = document.querySelector(".rating-section");
const thankyouSection = document.querySelector(".thankyou-section");

// Hiddes ratingSection after hit submit btn
submitBtn.addEventListener("click", () => {
  ratingSection.classList.add("hidden");
});

// Shows thankyouSection after hit submit btn
submitBtn.addEventListener("click", () => {
  thankyouSection.classList.remove("hidden");
});

const buttons = document.querySelectorAll("button");
const voteResult = document.querySelector(".vote-result");
const newParagraph = document.createElement("p");

// Get the button value and creates the <p> element
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    voteResult.appendChild(newParagraph);
    newParagraph.innerHTML = `You selected ${button.value} out of 5`;
  });
});
