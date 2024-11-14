async function fetchCurrentLocation() {
    try {
        const response = await fetch('https://api.example.com/current-location'); // Replace with actual API
        const data = await response.json();
        document.getElementById('current-location').innerText = data.location;
    } catch (error) {
        console.error('Error fetching location:', error);
        document.getElementById('current-location').innerText = 'Error loading location';
    }
}

window.onload = fetchCurrentLocation;
