document.getElementById('scan-button').addEventListener('click', function() {
    // Simulate scanning for WiFi networks
    const networks = [
        { ssid: 'Network 1', signal: '-50 dBm' },
        { ssid: 'Network 2', signal: '-70 dBm' },
        { ssid: 'Network 3', signal: '-60 dBm' }
    ];

    const networkList = document.getElementById('network-list');
    networkList.innerHTML = ''; // Clear previous results

    networks.forEach(network => {
        const networkItem = document.createElement('div');
        networkItem.textContent = `${network.ssid} - Signal Strength: ${network.signal}`;
        networkList.appendChild(networkItem);
    });
});
