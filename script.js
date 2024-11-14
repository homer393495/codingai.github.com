const newsList = document.getElementById('news-list');

async function fetchNews() {
    // Simulating fetching news from an API
    const newsArticles = [
        "Spring cleaning and new build mode items are here!",
        "New materials and pre-built house catalog added!",
        "Equal pay across all jobs implemented!",
        "New towing and hospital fees introduced!",
        "Exciting updates for Valentine's Day coming soon!"
    ];

    // Clear the current news list
    newsList.innerHTML = '';

    // Display each news article
    newsArticles.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article;
        newsList.appendChild(li);
    });
}

// Fetch news immediately and then every 10 seconds
fetchNews();
setInterval(fetchNews, 10000);
