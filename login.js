document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        let users = JSON.parse(sessionStorage.getItem('users')) || [];

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));

            console.log('User logged in:', JSON.parse(sessionStorage.getItem('loggedInUser')));

            window.location.href = 'homePage.html'; 
        } else {
            alert('Invalid credentials! Please check your email and password.');
        }
    });
});
