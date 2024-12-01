document.addEventListener('click', function (event) {
    const profileIcon = document.querySelector('.profile-icon');
    const dropdownMenu = document.querySelector('.dropdown');

    if (profileIcon.contains(event.target)) {
        dropdownMenu.classList.toggle('show');
    } else {
        dropdownMenu.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const createGroupForm = document.querySelector('form');
    const submitButton = createGroupForm.querySelector('.submit-btn');

    createGroupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const groupName = document.querySelector('#group-name').value;
        const subject = document.querySelector('#subject').value;
        const topic = document.querySelector('#topic').value;
        const numMembers = document.querySelector('#members-count').value;

        const googleMeetLink = "https://meet.google.com/new";

        const groupData = {
            name: groupName,
            subject: subject,
            topic: topic,
            members: numMembers,
            meetLink: googleMeetLink
        };

        let groups = JSON.parse(sessionStorage.getItem('groups')) || [];

        groups.push(groupData);

        sessionStorage.setItem('groups', JSON.stringify(groups));

        submitButton.disabled = true;
        submitButton.innerHTML = "Creating...";

        alert('Group created successfully!');

        createGroupForm.reset();

        window.location.href = 'homePage.html';
    });
});
