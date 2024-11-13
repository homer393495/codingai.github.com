const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

document.getElementById('city-input-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    weatherFn(cityName);
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('date').textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById('temperature').innerHTML = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('wind-speed').innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('weather-details').style.display = 'block';
}
