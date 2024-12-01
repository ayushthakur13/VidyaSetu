document.addEventListener('click', function (event) {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdownMenu = document.querySelector('.dropdown');

    if (profileIcon.contains(event.target)) {
        dropdownMenu.classList.toggle('show');
    } else {
        dropdownMenu.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const askQuestionForm = document.getElementById('questionForm');

    askQuestionForm.addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const questionInput = document.getElementById('questionInput').value.trim();
    
        if (!questionInput) {
            alert('Please enter a question');
            return;
        }
    
        try {
            console.log('Sending question to backend:', questionInput);  // Log question being sent
    
            const response = await fetch('http://localhost:5000/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: questionInput }),
            });                      
    
            const data = await response.json();
            console.log('Response from backend:', data);  // Log the response
            if (response.status === 200) {
                alert(data.message);
                document.getElementById('questionInput').value = '';  // Clear textarea
                window.location.href = 'homePage.html';  // Redirect to homePage
            } else {
                alert('Failed to submit question');
            }

        } catch (error) {
            console.error('Error submitting question:', error);
            alert('An error occurred while submitting your question');
        }
    });    
    
});
