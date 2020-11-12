window.onload = () => {
    const fullnameInput = document.getElementById('fullname');
    const form = document.getElementById('registration-form');
    const err = document.getElementById('fullname-error');
    const FULL_NAME = /^[a-z '-]+$/i;

    form.addEventListener('submit', (e) => {
        if (!FULL_NAME.test(fullnameInput.value)) {
            err.innerHTML = 'Please supply a full name';
            err.classList.add('fullname-error_active');
            fullnameInput.classList.add('border_error');
            e.preventDefault();
        } else {
            err.innerHTML = '';
            err.classList.remove('fullname-error_active');
            fullnameInput.classList.remove('border_error');
        }
    })
}