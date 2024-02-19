document.addEventListener("DOMContentLoaded", function () {
    const sessionAdditionForm = document.getElementById('sessionAdditionForm');

    sessionAdditionForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from being submitted immediately

        // Simulate a registration process delay with setTimeout
        setTimeout(function () {
            // Re-enable the button after the process is simulated
            sessionAdditionForm.disabled = false;

            // Show a success notification to the user
            alert('האימון נוסף בהצלחה!');

            // Redirecting the user to another page after clicking 'OK' on the alert
            window.location.href = "8_admin.html"; // Replace "anotherPage.html" with the actual page you want to redirect to
        }, 1000); // Delay set to 1000 milliseconds (1 second)
    });
});