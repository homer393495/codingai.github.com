function updateClock() {
    const now = new Date();
    
    // Get the current time
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', options);
    
    // Get the current timezone
    const timezoneString = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Update the clock and timezone display
    document.getElementById('clock').textContent = timeString;
    document.getElementById('timezone').textContent = `Timezone: ${timezoneString}`;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
