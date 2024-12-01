document.addEventListener('click', function (event) {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdownMenu = document.querySelector('.dropdown');

    // If the clicked element is the profile icon or inside the dropdown, toggle the menu
    if (profileIcon.contains(event.target)) {
        dropdownMenu.classList.toggle('show');
    } else {
        // Close the dropdown menu when clicking outside of the profile icon and dropdown
        dropdownMenu.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

    // If no user is found in sessionStorage, redirect to login page
    if (!user) {
        // Optional: You can add a delay or alert before redirecting
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);  // 1 second delay for user experience
    } else {
        // If user is logged in, show a personalized welcome message
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent = `Welcome, ${user.name}!`;
    }

    // Load and display data from the JSON file
    loadHomePageData();
});

// Function to load data from the JSON file and display it on the homepage
function loadHomePageData() {
    fetch('data/homePage.json')
        .then(response => response.json())
        .then(data => {
            // Display featured questions
            const featuredQuestionsList = document.getElementById('featured-questions-list');
            if (data.featuredQuestions && data.featuredQuestions.length > 0) {
                featuredQuestionsList.innerHTML = '';  // Clear any existing content

                data.featuredQuestions.forEach(question => {
                    const questionItem = document.createElement('li');
                    questionItem.classList.add('question-item');
                    questionItem.innerHTML = `
                        <h3>${question.title}</h3>
                        <p>${question.description}</p>
                    `;
                    featuredQuestionsList.appendChild(questionItem);
                });
            } else {
                featuredQuestionsList.innerHTML = '<li>No featured questions available.</li>';
            }

            // Display latest activities
            const latestActivitiesList = document.getElementById('latest-activities');
            if (data.latestActivities && data.latestActivities.length > 0) {
                latestActivitiesList.innerHTML = '';  // Clear any existing content

                data.latestActivities.forEach(activity => {
                    const activityItem = document.createElement('div');
                    activityItem.classList.add('latest-activity');
                    activityItem.innerHTML = `
                        <h4>${activity.activityName}</h4>
                        <p>${activity.activityDescription}</p>
                    `;
                    latestActivitiesList.appendChild(activityItem);
                });
            } else {
                latestActivitiesList.innerHTML = '<p>No latest activities available.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading home page data:', error);
            const latestActivitiesList = document.getElementById('latest-activities');
            latestActivitiesList.innerHTML = '<p>Error loading activities.</p>';
        });
}
