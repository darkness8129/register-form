window.addEventListener('load', () => {
    const fullnameInput = document.getElementById('fullname');
    const form = document.getElementById('registration-form');
    const err = document.getElementById('fullname-error');

    // regular expr for full name
    const FULL_NAME = /^[a-z '-]+$/i;
    // func for validation full name 
    const validateFullName = () => FULL_NAME.test(fullnameInput.value);

    form.addEventListener('submit', (e) => {
        // validate full name input 
        const isValidFullName = validateFullName();
        if (!isValidFullName) {
            // set text of err if validation failed
            err.innerHTML = 'Please supply a full name';
            // set styles if validation failed
            err.classList.add('fullname-error_active');
            fullnameInput.classList.add('border_error');
            // prevent submitting 
            e.preventDefault();
        }
        else {
            // set text of err if validation success
            err.innerHTML = '';
            // set styles if validation success
            err.classList.remove('fullname-error_active');
            fullnameInput.classList.remove('border_error');
        }
    })
});