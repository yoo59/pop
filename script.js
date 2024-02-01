const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const username = form.username.value;
    const password = form.password.value;

    if (username === "dio" && password === "55555"){
        window.location.href = "dashboard.html"; // Redirect to dashboard or desired page
    } else {
        errorMessage.textContent = "Invalid username or password";
    }

    if (username === "syera" && password === "akusayangkamu"){
        window.location.href = "dashboard.html"; // Redirect to dashboard or desired page
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});