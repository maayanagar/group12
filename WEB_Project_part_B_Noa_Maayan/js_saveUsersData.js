document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from being submitted to the server

        // Capture form data
        const userData = {
            subscriptionType: document.querySelector('input[name="subscription-type"]:checked').value,
            firstName: document.getElementById('firstName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value, // Be cautious with storing passwords, even in localStorage
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            creditCard: document.getElementById('creditCard').value,
            id: document.getElementById('id').value,
            exp: document.getElementById('exp').value,
            cvv: document.getElementById('cvv').value
        };
        saveUser(userData); // Save the user data to localStorage
    })

    function saveUser(userData) {
        // Assuming email as a unique identifier for each user
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUserIndex = users.findIndex(user => user.email === userData.email);

        if (existingUserIndex !== -1) {
            alert('User already exists!');
            return; // Stop the function if the user already exists
        }

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
    }


});
