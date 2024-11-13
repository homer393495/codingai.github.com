document.getElementById('refresh-btn').addEventListener('click', fetchBusLocations);

function fetchBusLocations() {
    // Simulated API call to fetch bus locations
    const busLocations = [
        { id: '1', name: 'Bus 1', latitude: 42.4411, longitude: -76.5019 },
        { id: '2', name: 'Bus 2', latitude: 42.4422, longitude: -76.5020 },
        { id: '3', name: 'Bus 3', latitude: 42.4433, longitude: -76.5031 }
    ];

    const busList = document.getElementById('bus-list');
    busList.innerHTML = ''; // Clear previous list

    busLocations.forEach(bus => {
        const listItem = document.createElement('li');
        listItem.textContent = `${bus.name} is at Latitude: ${bus.latitude}, Longitude: ${bus.longitude}`;
        busList.appendChild(listItem);
    });
}

// Initial fetch on page load
fetchBusLocations();
