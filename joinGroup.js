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
    const groupListContainer = document.querySelector('.group-list');

    const storedGroups = JSON.parse(sessionStorage.getItem('groups')) || [];

    function createGroupItem(group) {
        const groupItem = document.createElement('div');
        groupItem.classList.add('group-item');
        
        groupItem.innerHTML = `
            <div class="group-details">
                <h3>${group.name}</h3>
                <p><strong>Subject:</strong> ${group.subject}</p>
                <p><strong>Topic:</strong> ${group.topic}</p>
                <p><strong>Members:</strong> ${group.members}</p>
            </div>
            <button class="join-btn">Join</button>
        `;

        const joinButton = groupItem.querySelector('.join-btn');
        joinButton.addEventListener('click', function() {
            window.open(group.meetLink, '_blank');
        });

        return groupItem;
    }

    storedGroups.forEach(group => {
        const groupItem = createGroupItem(group);
        groupListContainer.appendChild(groupItem);
    });
});
