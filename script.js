document.getElementById("submit-btn").addEventListener("click", function () {
  var email = document.getElementById("user-email").value;
  var emailDisplay = document.getElementById("submitted-email");
  var errorMessage = document.getElementById("errorMessage");
  var emailInput = document.getElementById("user-email");
  // Email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    emailDisplay.textContent = email;
    document.getElementById("mainss").style.display = "flex";
    document.getElementById("first").style.display = "none";
  } else {
    emailInput.classList.add("invalid");
    errorMessage.classList.remove("hidden");
  }
});

document.getElementById("dismiss-btn").addEventListener("click", function () {
  document.getElementById("mainss").style.display = "none";
  document.getElementById("first").style.display = "flex";
  document.getElementById("user-email").value = ""; // Clear the input field
  document.getElementById("user-email").classList.add("hidden");
});
