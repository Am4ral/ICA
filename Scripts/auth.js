
window.onload = function () {
    //Sign Up
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //Get user info
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        //Sign Up user
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            const modal = document.querySelector('#modal-signup');
            M.Modal.getInstance(modal).close();
            signupForm.reset();
        })
    })
}