"use strict";
const emailInput = document.getElementById("email");

function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}
function showOrHideTip(show, element) {
  if (show) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
emailInput.addEventListener("input", (e) => {
  const text = e.target.value;
  console.log(text);
  const isValid = isValidEmail(text);
  const showTip = text !== " " && !isValid;
  console.log(showTip);
  const errorMessage = e.target.nextElementSibling;
  console.log(errorMessage);
  showOrHideTip(showTip, errorMessage);
});
