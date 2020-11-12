window.onload = () => {
    const passwordInput = document.getElementById('password'),
        togglePasswordBtn = document.getElementById('toggle-password-btn');

    togglePasswordBtn.addEventListener('click', () => {
        let type;

        if (passwordInput.type === 'password') {
            type = 'text';
            togglePasswordBtn.innerHTML = 'hide';
        } else {
            type = 'password';
            togglePasswordBtn.innerHTML = 'show';
        }

        passwordInput.setAttribute('type', type);
    })
}