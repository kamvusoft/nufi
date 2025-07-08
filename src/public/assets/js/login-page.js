const signUpBtn = document.getElementById('sign-up-btn');
const signInBtn = document.getElementById('sign-in-btn');
const mainContainer = document.getElementById('main-container');

if(!!signUpBtn && !! mainContainer) {
    signUpBtn.addEventListener('click', () => {
        mainContainer.classList.add("right-panel-active");
    });
}

if(!!signInBtn && !! mainContainer) {
    signInBtn.addEventListener('click', () => {
        mainContainer.classList.remove("right-panel-active");
    });
}