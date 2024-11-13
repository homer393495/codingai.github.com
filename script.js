// Array of image URLs
const images = [
    'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/300/3357FF/FFFFFF?text=Image+3',
    'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Image+4',
    'https://via.placeholder.com/300/A133FF/FFFFFF?text=Image+5',
    'https://via.placeholder.com/300/FFDA33/FFFFFF?text=Image+6',
    'https://via.placeholder.com/300/33FFD1/FFFFFF?text=Image+7',
    'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+8',
    'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+9',
    'https://via.placeholder.com/300/FF33FF/FFFFFF?text=Image+10'
];

// Function to generate a random picture
function generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const imageElement = document.getElementById('random-image');

    imageElement.src = randomImage;
    imageElement.style.display = 'block'; // Show the image
}

// Event listener for the generate button
document.getElementById('generate-button').addEventListener('click', generateRandomImage);

// Chatbot functionality
const chatlog = document.getElementById('chatlog');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to handle sending messages
function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Display user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.textContent = `You: ${userMessage}`;
    chatlog.appendChild(userMessageDiv);

    // Clear input
    userInput.value = '';

    // Simulate bot response
    const botResponse = `Bot: You said "${userMessage}"`;
    const botMessageDiv = document.createElement('div');
    botMessageDiv.textContent = botResponse;
    chatlog.appendChild(botMessageDiv);

    // Scroll to the bottom of the chatlog
    chatlog.scrollTop = chatlog.scrollHeight;
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for pressing Enter key
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
