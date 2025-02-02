document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.querySelector('input[name="remember"]').checked;

    // Basic validation
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Add your login logic here
    console.log('Login attempted with:', { username, password, rememberMe });
    
    // Simulate successful login
    alert('Login successful! (This is a demo)');
    
    // Clear form fields
    this.reset();
    
    // Remember me functionality
    if (rememberMe) {
        localStorage.setItem('rememberedUser', username);
    } else {
        localStorage.removeItem('rememberedUser');
    }
});

// Check for remembered user
window.addEventListener('DOMContentLoaded', () => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.querySelector('input[name="remember"]').checked = true;
    }
});
