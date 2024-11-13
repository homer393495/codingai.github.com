const trainList = document.getElementById('train-list');
const searchInput = document.getElementById('search');
const trainTypeFilter = document.getElementById('train-type-filter');
const sortNameButton = document.getElementById('sort-name');
const sortArrivalButton = document.getElementById('sort-arrival');

let trains = [];

async function fetchTrainData() {
    try {
        // Replace with a real API endpoint that provides train data for Ithaca
        const response = await fetch('https://api.example.com/trains/ithaca'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        trains = await response.json();
        displayTrains(trains);
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
        trainItem.onclick = () => alert(`Details for ${train.name}: Arrival at ${train.arrival}`);
        trainList.appendChild(trainItem);
    });
}

// Filtering and Searching
function filterAndSearchTrains() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = trainTypeFilter.value;

    const filteredTrains = trains.filter
