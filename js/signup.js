// signup.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const termsAgree = document.getElementById('termsAgree').checked;
            
            // Basic validation
            if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!termsAgree) {
                alert('Please agree to the Terms and Conditions');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Phone number basic validation
            const phoneRegex = /^\+?[0-9\s\-\(\)]{8,20}$/;
            if (!phoneRegex.test(phoneNumber)) {
                alert('Please enter a valid phone number');
                return;
            }
            
            // Password strength check (basic)
            if (password.length < 8) {
                alert('Password must be at least 8 characters long');
                return;
            }
            
            // If all validations pass, you would normally submit the form to the server
            // For this example, we'll just show a success message and redirect
            alert('Account created successfully! Redirecting to login page...');
            
            // Simulate storing user data (in a real app, this would be handled by the server)
            const userData = {
                firstName,
                lastName,
                email,
                phoneNumber,
                // In a real app, never store passwords in local storage
                // This is just for demonstration
                isLoggedIn: false
            };
            
            // Store in localStorage (for demonstration purposes only)
            localStorage.setItem('techHiveUserData', JSON.stringify(userData));
            
            // Redirect to login page
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        });
    }
});

// Function to toggle password visibility
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = event.currentTarget.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        passwordInput.type = 'password';
        icon.className = 'fas fa-eye';
    }
}