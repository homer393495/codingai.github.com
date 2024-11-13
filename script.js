const trainList = document.getElementById('train-list');

async function fetchTrainData() {
    try {
        // Replace with a real API endpoint that provides train data for Ithaca
        const response = await fetch('https://api.example.com/trains/ithaca'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayTrains(data);
    } catch (error) {
        console.error('Error fetching train data:', error);
        trainList.innerHTML = 'Failed to load train information. Please try again later.';
    }
}

function displayTrains(trains) {
    trainList.innerHTML = '';
    if (trains.length === 0) {
        trainList.innerHTML = 'No trains available at the moment.';
        return;
    }
    trains.forEach(train => {
        const trainItem = document.createElement('div');
        trainItem.className = 'train-item';
        trainItem.innerHTML = `<strong>Train:</strong> ${train.name} <strong>Arrival:</strong> ${train.arrival}`;
        trainList.appendChild(trainItem);
    });
}

// Fetch train data every minute
setInterval(fetchTrainData, 60000);
fetchTrainData();
