// Simulate a delay for the AI response
setTimeout(() => {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    appendMessage(randomResponse, '
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatbox = document.getElementById('chatbox');

sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, 'chat-outgoing');
        messageInput.value = '';
        getAIResponse(userMessage);
    }
});

// Function to append messages to the chatbox
function appendMessage(message, type) {
    const li = document.createElement('li');
    li.className = type + ' chat';
    li.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

// Function to simulate AI response
function getAIResponse(userMessage) {
    // Simulated AI response (you can replace this with an actual API call)
    const responses = [
        "That's interesting! Can you tell me more?",
        "I'm not sure about that. Could you clarify?",
        "That's a great question! Here's what I think...",
        "Let me look into that for you.",
        "Can you provide an example?"
    ];

    // Simulate a delay for the AI response
    setTimeout(() => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        appendMessage(randomResponse, 'chat-incoming'); // Append AI response
    }, 1000); // Delay of 1 second for the response
}
