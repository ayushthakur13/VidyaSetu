document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        const userData = {
            name: name,
            email: email,
            password: password
        };

        let users = JSON.parse(sessionStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            alert('User already exists. Please log in.');
            window.location.href = 'login.html'; 
        } else {
            users.push(userData);
            sessionStorage.setItem('users', JSON.stringify(users)); 

            alert('Registration successful!');
            window.location.href = 'login.html'; 
        }
    });
});
