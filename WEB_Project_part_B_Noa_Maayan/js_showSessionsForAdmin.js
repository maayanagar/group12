// Ensure this file is loaded after sessionsData.js
function populateSessionsSelect() {
    const select = document.getElementById('sessionSelect');
    sessions.forEach(session => {
        const option = document.createElement('option');
        option.value = session.id;
        option.textContent =`${session.day}, ${session.date}, ${session.time}, ${session.type}` ;
        select.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    populateSessionsSelect();

     const sessionReductionForm = document.getElementById('sessionReductionForm');

    sessionReductionForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from being submitted immediately

        // Simulate a registration process delay with setTimeout
        setTimeout(function () {
            // Re-enable the button after the process is simulated
            sessionReductionForm.disabled = false;

            // Show a success notification to the user
            alert('האימון הוסר בהצלחה!');

            // Redirecting the user to another page after clicking 'OK' on the alert
            window.location.href = "8_admin.html"; // Replace "anotherPage.html" with the actual page you want to redirect to
        }, 1000); // Delay set to 1000 milliseconds (1 second)
    });
});