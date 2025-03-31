// Select all required elements
const userName = document.querySelector('.forgot-username-link');
const password = document.querySelector('.forgot-password-link');
const logWind = document.querySelector('.login-window');
const forgotPassWind = document.querySelector('.forgot-password-window');
const forgotUserIDwind = document.querySelector('.forgot-userid-window');
const parentloginwindow = document.querySelector('.parent-login-window');
const alumniloginwindow = document.querySelector('.alumni-login-window');
const parentoption = document.querySelector('.parent-button');
const alumnioption = document.querySelector('.alumni-button');
const studentoption = document.querySelector('.student-button');
const teacheroption = document.querySelector('.teacher-button');

// Array of all windows
const windows = [logWind, forgotPassWind, forgotUserIDwind, parentloginwindow, alumniloginwindow];

// Helper function to show one window and hide others
function showWindow(windowToShow) {
    windows.forEach(window => {
        if (window) {
            window.style.display = (window === windowToShow) ? "flex" : "none";
        }
    });
}

// Initially hide all windows except student login
showWindow(logWind);

// Event Listeners
if (userName) {
    userName.addEventListener('click', () => showWindow(forgotUserIDwind));
}

if (password) {
    password.addEventListener('click', () => showWindow(forgotPassWind));
}

if (parentoption) {
    parentoption.addEventListener('click', () => showWindow(parentloginwindow));
}

if (alumnioption) {
    alumnioption.addEventListener('click', () => showWindow(alumniloginwindow));
}

if (studentoption) {
    studentoption.addEventListener('click', () => showWindow(logWind));
}

if (teacheroption) {
    teacheroption.addEventListener('click', () => showWindow(logWind)); // Assuming teacher uses the same login
}
