import React, { useState } from 'react';
import './styles/App.css';

function App() {
    const [time, setTime] = useState(0);
    const [userText, setUserText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    function handleChange(event) {
        setUserText(event.target.value);
    }
    function handleStart() {}

    return (
        <main>
            <h1>Speed Typing Game</h1>
            <textarea
                name="userText"
                cols="30"
                rows="10"
                value={userText}
                onChange={handleChange}
            />
            <h4>Time remaining {time} seconds.</h4>
            <button onClick={handleStart}>Start</button>
            <p>Total Words: {wordCount}</p>
        </main>
    );
}

export default App;
