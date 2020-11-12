window.addEventListener('load', () => {
    const passwordInput = document.getElementById('password'),
        togglePasswordBtn = document.getElementById('toggle-password-btn');

    // show-hide btn in password input 
    togglePasswordBtn.addEventListener('click', () => {
        let type;
        // show 
        if (passwordInput.type === 'password') {
            type = 'text';
            togglePasswordBtn.innerHTML = 'hide';
        }
        // hide
        else {
            type = 'password';
            togglePasswordBtn.innerHTML = 'show';
        }

        passwordInput.setAttribute('type', type);
    })
});