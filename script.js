document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, reset the form
    document.getElementById('contact-form').reset();
});

// Function to fetch and display the current ship's time
function updateShipTime() {
    const now = new Date();
    const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('ship-time').textContent = `Current Ship's Time: ${timeString}`;
}

// Update the ship's time every second
setInterval(updateShipTime, 1000);

// Initial call to display the time immediately on page load
updateShipTime();
