document.addEventListener("DOMContentLoaded", function () {
    const sessions = document.querySelectorAll('.session');

    sessions.forEach(function (session) {
        session.addEventListener('click', function () {
            session.classList.toggle('session-clicked');
        });
    });

    const button = document.querySelector('button');

    // Add click event listener to the button
    button.addEventListener('click', function () {
        // Disable the button to prevent multiple clicks during the process
        button.disabled = true;

        // Simulate a registration process delay with setTimeout
        setTimeout(function () {
            // Re-enable the button after the process is simulated
            button.disabled = false;

            // Show a success notification to the user
            alert('הרשמתך בוצעה בהצלחה!');

            // Optionally, after showing the success message, you might want to perform additional actions,
            // like redirecting the user to another page or clearing a form.
        }, 1000); // Delay set to 2000 milliseconds (2 seconds)
    });


});
