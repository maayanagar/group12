document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from being submitted immediately

        let errorMessage = ''; // Initialize an empty string to accumulate error messages

        // Perform validations
        if (!validatePhone(document.getElementById('phone').value)) {
            errorMessage += 'Invalid phone number. Phone number must be 10 digits and start with \'0\'.\n';
        }
        if (!validateEmail(document.getElementById('email').value)) {
            errorMessage += 'Invalid email format.\n';
        }
        if (!validateCreditCard(document.getElementById('creditCard').value)) {
            errorMessage += 'Invalid credit card number. Credit card number must be 16 digits.\n';
        }
        if (!validateID(document.getElementById('id').value)) {
            errorMessage += 'Invalid ID. ID must be 9 digits.\n';
        }
        if (!validateCVV(document.getElementById('cvv').value)) {
            errorMessage += 'Invalid CVV. CVV must be 3 or 4 digits.\n';
        }

        if (errorMessage.length > 0) {
            // If there are error messages, show them in an alert
            alert('Please correct the following errors:\n' + errorMessage);
        } else {
            console.log('Form is valid. Proceeding with submission...');
            // Here you can proceed with form submission, like sending data via Ajax or showing a success message
        }
    });

    function validatePhone(phone) {
        const phonePattern = /^0\d{9}$/;
        return phonePattern.test(phone);
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateCreditCard(creditCard) {
        const creditCardPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;
        return creditCardPattern.test(creditCard);
    }

    function validateID(id) {
        const idPattern = /^\d{9}$/;
        return idPattern.test(id);
    }

    function validateCVV(cvv) {
        const cvvPattern = /^\d{3,4}$/;
        return cvvPattern.test(cvv);
    }


});
