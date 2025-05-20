
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            if (!email || !password) {
                alert('Please fill in all required fields');
                return;
            }
          
            
            console.log('Login attempt:', { email, password, rememberMe });
            
            if (rememberMe) {
                localStorage.setItem('techHiveUserEmail', email);
            } else {
                localStorage.removeItem('techHiveUserEmail');
            }
            
            localStorage.setItem('techHiveLoggedIn', 'true');
            
            window.location.href = '../index.html';
        });
    }
    
    const rememberedEmail = localStorage.getItem('techHiveUserEmail');
    if (rememberedEmail) {
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.value = rememberedEmail;
            document.getElementById('rememberMe').checked = true;
        }
    }
});