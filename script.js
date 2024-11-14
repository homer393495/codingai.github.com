document.addEventListener('DOMContentLoaded', function() {
    const updates = [
        "Version 1.0: Launch of the game!",
        "Version 1.1: Added new islands to explore.",
        "Version 1.2: Introduced new mini-games and activities.",
        "Version 1.3: Bug fixes and performance improvements."
    ];

    const updateList = document.getElementById('update-list');

    updates.forEach(update => {
        const listItem = document.createElement('div');
        listItem.textContent = update;
        updateList.appendChild(listItem);
    });
});
