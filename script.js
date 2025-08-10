script.js
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "admin" && password === "1234") {
    message.style.color = "lightgreen";
    message.innerText = "Login successful!";
    return false; // prevent form submission
  } else {
    message.innerText = "Invalid credentials. Try again!";
    return false; // prevent form submission
  }
}
