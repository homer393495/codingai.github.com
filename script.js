const apiUrl = 'https://homer393495.github.io/codingai.github.com/'; // Replace with your API URL
const updateList = document.getElementById('update-list');
const updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener('click', checkForUpdates);

function checkForUpdates() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(updates => {
            updateList.innerHTML = '';
            updates.forEach(update => {
                const listItem = document.createElement('div');
                listItem.textContent = update;
                updateList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Initial update check
checkForUpdates();
