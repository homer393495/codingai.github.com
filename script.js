document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('p');
        userMessage.textContent = 'You: ' + userInput.value;
        chatbox.appendChild(userMessage);

        // Simulate a response from ChatGPT
        const botMessage = document.createElement('p');
        botMessage.textContent = 'ChatGPT: ' + getBotResponse(userInput.value);
        chatbox.appendChild(botMessage);

        // Clear the input
        userInput.value = '';
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
    }
});

// Simple function to simulate ChatGPT response
function getBotResponse(input) {
    // Here you can implement more complex logic or responses
    return "This is a simulated response to: " + input;
}
