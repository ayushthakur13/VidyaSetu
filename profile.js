document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

    console.log('Logged in user:', user);

    if (!user) {
        window.location.href = 'login.html';
    }

    document.getElementById('name').textContent = user.name;
    document.getElementById('email').textContent = user.email;

    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUser');

        window.location.href = 'index.html';
    });
});
