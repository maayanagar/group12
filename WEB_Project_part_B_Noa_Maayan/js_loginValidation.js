document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".square-text-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validate user
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // User found
            if (user.role === "admin") {
                // Navigate to the admin's page
                window.location.href = "8_admin.html";
            } else {
                // Navigate to the user's account page
                window.location.href = "10_myAccount.html";
            }
        } else {
            // User not found or incorrect password
            alert("שם משתמש או סיסמה שגויים");
        }
    });
});
