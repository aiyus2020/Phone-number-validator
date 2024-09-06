const inputs = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
let result = document.getElementById("results-div");

const valPhoneNumber = () => {
  const userInput = inputs.value;
  const regex = /^(?:\+234\s?)?(\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }

  if (regex.test(userInput)) {
    result.innerHTML += `<li class='text'>Valid Nigeria number: ${userInput}</li>`;
  } else {
    result.innerHTML += `<li class='text'>Invalid Nigeria number: ${userInput}</li>`;
  }
};

// Add event listeners
checkBtn.addEventListener("click", () => {
  valPhoneNumber();
  inputs.value = ""; // Clear the input after checking
});
``;
clearBtn.addEventListener("click", () => {
  result.innerHTML = ""; // Clear the result display
});
