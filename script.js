const weatherApiKey = 'd8f791bdb444a9f40b665e3cb01379f5';
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ithaca,NY&appid=${weatherApiKey}&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weather-data');
    weatherDataDiv.innerHTML = `
        <p>Temperature: ${data.main.temp} °F</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

fetchWeather();
