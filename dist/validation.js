"use strict";
const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const surname_input = document.getElementById('surname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');
form.addEventListener('submit', (e) => {
    let errors = [];
    if (firstname_input && surname_input) {
        errors = getSignupFormErrors(firstname_input.value, surname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    }
    else {
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }
    if (errors.length > 0) {
        e.preventDefault();
        error_message.innerText = errors.join(". ");
    }
});
function getSignupFormErrors(firstname, surname, email, password, repeatPassword) {
    const errors = [];
    if (firstname.trim() === '') {
        errors.push('Förnamn måste fyllas i');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (surname.trim() === '') {
        errors.push('Efternamn måste fyllas i');
        surname_input.parentElement.classList.add('incorrect');
    }
    if (email.trim() === '') {
        errors.push('E-post måste fyllas i');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '') {
        errors.push('Lösenord måste fyllas i');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Lösenordet måste vara minst 8 tecken långt');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== repeatPassword) {
        errors.push('Lösenorden matchar inte');
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}
function getLoginFormErrors(email, password) {
    const errors = [];
    if (email.trim() === '') {
        errors.push('E-post måste fyllas i');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password.trim() === '') {
        errors.push('Lösenord måste fyllas i');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}
const allInputs = [firstname_input, surname_input, email_input, password_input, repeat_password_input]
    .filter((input) => input !== null);
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = '';
        }
    });
});
//# sourceMappingURL=validation.js.map