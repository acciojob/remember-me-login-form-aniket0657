document.addEventListener("DOMContentLoaded", () => {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const loginForm = document.getElementById("loginForm");
    const existingUserButton = document.getElementById("existing");

    function checkStoredCredentials() {
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");
        if (storedUsername && storedPassword) {
            existingUserButton.style.display = "block";
            console.log("Stored credentials found.");
        } else {
            console.log("No stored credentials.");
        }
    }

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = usernameField.value;
        const password = passwordField.value;
        alert(`Logged in as ${username}`);

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            console.log("Credentials saved.");
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            console.log("Credentials removed.");
        }
        checkStoredCredentials();
    });

    existingUserButton.addEventListener("click", () => {
        const storedUsername = localStorage.getItem("username");
        alert(`Logged in as ${storedUsername}`);
    });

    checkStoredCredentials();
});