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
    loadQuestions();  // Call the function once

    function loadQuestions() {
        fetch('http://localhost:5000/questions')  // Ensure the correct URL
            .then(response => response.json())
            .then(data => {
                const questionSelect = document.getElementById('questionSelect');
                questionSelect.innerHTML = "<option value=''>Select a question</option>";

                // Check if the response has questions and iterate
                if (data.questions && data.questions.length > 0) {
                    data.questions.forEach((question) => {
                        const option = document.createElement("option");
                        option.value = question.id;  // Use id to store the question
                        option.textContent = question.question;  // Display the question
                        questionSelect.appendChild(option);
                    });
                } else {
                    const option = document.createElement("option");
                    option.textContent = "No questions available.";
                    questionSelect.appendChild(option);
                }
            })
            .catch(error => {
                console.error('Error fetching questions:', error);
                const questionSelect = document.getElementById('questionSelect');
                questionSelect.innerHTML = "<option value=''>Failed to load questions.</option>";
            });
    }
});
