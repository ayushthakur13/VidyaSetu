document.addEventListener('DOMContentLoaded', function() {
    const startStudyingBtn = document.getElementById('startStudyingBtn'); 

    if (startStudyingBtn) {
        startStudyingBtn.addEventListener('click', function(event) {
            event.preventDefault();

            const currentUser = sessionStorage.getItem('currentUser');

            if (currentUser) {
                window.location.href = 'homePage.html';
            } else {
                window.location.href = 'login.html';
            }
        });
    }
});

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('mouseover', () => {
        const content = button.nextElementSibling;
        content.classList.add('show');
    });

    button.addEventListener('mouseout', () => {
        const content = button.nextElementSibling;
        setTimeout(() => {
            content.classList.remove('show');
        }, 300); 
    });
});


document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faqItem = toggle.parentNode;
        faqItem.classList.toggle('active');
        
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});
