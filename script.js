'use strict';

let currentDay = new Date();
let newFormat = currentDay.toDateString();
let getData = document.getElementById('today');
getData.innerHTML = `Today's Date: ${newFormat}`;

// Function to fetch train data (mockup)
async function fetchTrainData() {
    // Replace with actual API endpoint
    const response = await fetch('https://api.example.com/trains/ithaca');
    const data = await response.json();
    displayTrainData(data);
}

// Function to display train data
function displayTrainData(data) {
    const trainList = document.getElementById('train-list');
    trainList.innerHTML = ''; // Clear previous data
    data.trains.forEach(train => {
        const trainItem = document.createElement('div');
        trainItem.innerHTML = `<strong>Train:</strong> ${train.name} - <strong>Status:</strong> ${train.status}`;
        trainList.appendChild(trainItem);
    });
}

// Call the fetch function on page load
fetchTrainData();
