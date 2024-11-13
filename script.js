body {
    background: linear-gradient(to right, #4A90E2, #50E3C2);
    font-family: 'Arial', sans-serif;
    color: #fff;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    font-size: 3em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p {
    font-size: 1.2em;
}

#news-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.article {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    width: calc(30% - 20px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}

.article:hover {
    transform: scale(1.05);
}

footer {
    text-align: center;
    margin-top: 20px;
}
