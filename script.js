function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: { lat: 37.4460, lng: -24.9467 },
    });

    // Add your ship tracking logic here
}

function searchShip() {
    const shipName = document.getElementById("shipSearch").value;
    // Implement search functionality to find and display the ship on the map
}

// Load the Google Maps API
const script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
script.async = true;
document.head.appendChild(script);
