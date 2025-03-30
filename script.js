//your JS code here. If required.
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
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }
                checkStoredCredentials();
            });

            existingUserButton.addEventListener("click", () => {
                const storedUsername = localStorage.getItem("username");
                alert(`Logged in as ${storedUsername}`);
            });

            checkStoredCredentials();
        });