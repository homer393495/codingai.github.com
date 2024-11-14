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

function appendMessage(message, type) {
    const li = document.createElement('li');
    li.className = type + ' chat';
    li.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getAIResponse(userMessage) {
    // Simulated AI response (you can replace this with an actual API call)
    const responses = [
        "That's interesting! Can you tell me more?",
        "I'm not sure about that. Could you clarify?",
        "That's a great question! Here's what I think...",
        "Let me look into that for you.",
        "Can you provide an example?"
    ];

    const randomResponse = responses[Math.floor(Math.random()
