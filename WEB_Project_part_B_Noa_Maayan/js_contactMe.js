document.addEventListener("DOMContentLoaded", function () {

    const emailIcon = document.getElementById('emailIcon');

    emailIcon.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Set your email address
        const myEmailAddress = 'itayshushan@itennis.com';

        // Use the mailto protocol to open the default email client
        window.location.href = `mailto:${myEmailAddress}`;
    });

});