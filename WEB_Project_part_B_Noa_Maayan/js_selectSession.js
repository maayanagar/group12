document.addEventListener("DOMContentLoaded", function () {
    const sessions = document.querySelectorAll('.session');
    const button = document.querySelector('button');

    sessions.forEach(function (session) {
        session.addEventListener('click', function () {
            if (session.classList.contains('session-clicked')) {
                // If this session is already selected, unselect it
                session.classList.remove('session-clicked');
            } else {
                // If this session is not selected, first unselect all sessions
                sessions.forEach(function (otherSession) {
                    otherSession.classList.remove('session-clicked');
                });
                // Then, select the clicked session
                session.classList.add('session-clicked');
            }
        });
    });

    button.addEventListener('click', function (e) {
        // Check if any session is selected
        const selectedSession = document.querySelector('.session.session-clicked');
        if (!selectedSession) {
            // Prevent form submission
            e.preventDefault(); // Stop the button's default action
            alert('אנא בחר אימון או מגרש לפני ההרשמה!');
            button.disabled = false; // Re-enable the button so the user can try again
            return; // Exit the function to stop further execution
        }

        // If a session is selected, proceed with the original button logic
        button.disabled = true; // Disable the button to prevent multiple clicks during the process

        // Simulate a registration process delay with setTimeout
        setTimeout(function () {
            button.disabled = false; // Re-enable the button after the process is simulated
            alert('הרשמתך בוצעה בהצלחה!'); // Show a success notification to the user
            window.location.href = "10_myAccount.html";
            // After showing the success message, you might want to perform additional actions
        }, 1000); // Delay set to 1000 milliseconds (1 second)
    });
});
