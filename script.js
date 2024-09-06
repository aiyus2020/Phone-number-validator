const inputs = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
let result = document.getElementById("results-div");

const valPhoneNumber = () => {
  const userInput = inputs.value.trim(); // Trim any spaces around the input
  const regex =
    /^(?:\+234|0)?([\s-]?)(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

  // Check if input is empty
  if (userInput === "") {
    alert("Please provide a phone number");
    return;
  }

  // Test against the regex pattern and display result
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

clearBtn.addEventListener("click", () => {
  result.innerHTML = ""; // Clear the result display
});
