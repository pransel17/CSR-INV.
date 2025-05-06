document.addEventListener("DOMContentLoaded", function() {
    let splashContent = document.querySelector(".splash-content");
    let schoolLogo = document.querySelector(".school-logo"); // School logo & text
    let splashScreen = document.getElementById("splash-screen");
    let loginScreen = document.getElementById("login-screen"); // Ensure login screen exists

    // Delay school logo & text fade-in by 0.5s
    setTimeout(function() {
        schoolLogo.classList.add("school-visible"); // Fade-in school logo & text

        setTimeout(function() {
            // After 3 seconds, fade out everything
            splashContent.classList.add("splash-hidden");

            setTimeout(function() {
                // Hide splash screen and show login screen
                splashScreen.style.opacity = '0';
                splashScreen.style.zIndex = '1';
                loginScreen.style.opacity = '1';
                loginScreen.style.zIndex = '3';
            }, 1000); // 1s fade-out duration
        }, 2000); // Keep everything visible for 2s before fading out
    }, 500); // 0.5s delay before school logo & text fade in
});










document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    const loginScreen = document.getElementById('login-screen');
    const container = document.getElementById('container');
    const dashboardBody = document.getElementsByClassName('dashboard-body');
    const forgotPasswordScreen = document.getElementById('forgot-password-screen');
    
    const loginInstead = document.getElementById("logInstead");
    const loginForm = document.getElementById('login-form');
    const resetForm = document.getElementById('reset-form');
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const wCred = document.getElementById('wrong-credentials');
    const loginBox = document.getElementsByClassName('login-box');
    
   
    
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginScreen.style.opacity = '0';
        loginScreen.style.zIndex = '1';
        forgotPasswordScreen.style.opacity = '1';
        forgotPasswordScreen.style.zIndex = '3';
    });

    loginInstead.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordScreen.style.opacity = '0';
        forgotPasswordScreen.style.zIndex = '1';
        loginScreen.style.opacity = '1';
        loginScreen.style.zIndex = '3';
    })
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            const authResponse = await response.json();
            
            if (authResponse.success) {
                if (authResponse.role === "admin") {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    alert('Login successful!');
                }
            }else {
                wCred.style.opacity = '1';
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again later.');
        }
    });

    resetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const resetEmail = document.getElementById('reset-email').value;
        
        console.log('Password reset requested for:', resetEmail);
        alert('Password reset email would be sent here.');
        
        forgotPasswordScreen.style.opacity = '0';
        forgotPasswordScreen.style.zIndex = '1';
        loginScreen.style.opacity = '1';
        loginScreen.style.zIndex = '3';
    });
});