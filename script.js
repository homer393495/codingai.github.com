document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');

    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('p');
        userMessage.textContent = 'You: ' + userInput.value;
        chatbox.appendChild(userMessage);

        // Generate a response from the simulated ChatGPT
        const botMessage = document.createElement('p');
        botMessage.className = 'code';
        botMessage.textContent = 'ChatGPT: ' + generateCodeResponse(userInput.value);
        chatbox.appendChild(botMessage);

        // Clear the input
        userInput.value = '';
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
    }
});

// Function to simulate ChatGPT response with code snippets
function generateCodeResponse(input) {
    // Simple keyword-based response generation
    if (input.toLowerCase().includes('html')) {
        return '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Web Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>';
    } else if (input.toLowerCase().includes('css')) {
        return 'body {\n    background-color: #f4f4f4;\n}';
    } else if (input.toLowerCase().includes('javascript')) {
        return 'console.log("Hello, World!");';
    } else {
        return 'I\'m not sure how to respond to that. Try asking about HTML, CSS, or JavaScript!';
    }
}
