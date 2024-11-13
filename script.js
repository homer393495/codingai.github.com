const busListElement = document.getElementById('bus-list');
const refreshBtn = document.getElementById('refresh-btn');

async function fetchBusLocations() {
    try {
        // Replace with your API endpoint
        const response = await fetch('https://api.example.com/bus-locations');
        const data = await response.json();

        // Clear the current bus list
        busListElement.innerHTML = '';

        // Populate the bus list
        data.buses.forEach(bus => {
            const listItem = document.createElement('li');
            listItem.textContent = `Bus Number: ${bus.number}, Location: ${bus.location}, Status: ${bus.status}`;
            busListElement.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching bus locations:', error);
        busListElement.innerHTML = '<li>Error fetching bus locations. Please try again later.</li>';
    }
}

// Fetch bus locations on initial load
fetchBusLocations();

// Refresh bus locations on button click
refreshBtn.addEventListener('click', fetchBusLocations);
