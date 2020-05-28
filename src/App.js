import React, { useState, useEffect } from 'react';
import './styles/App.css';

function App() {
    const [time, setTime] = useState(5);
    const [userText, setUserText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning && time > 0) {
            setTimeout(() => {
                setTime((time) => time - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
            setWordCount(wordCounter(userText));
        }
        return () => {};
    }, [time, isRunning]);

    function handleChange(e) {
        const { value } = e.target;
        setUserText(value);
    }

    function wordCounter(text) {
        const wordArray = text.trim().split(' ');
        return wordArray.filter((word) => word !== '').length;
    }

    return (
        <main>
            <h1>How fast can you type?</h1>
            <textarea
                name="userText"
                cols="30"
                rows="10"
                value={userText}
                onChange={handleChange}
            />
            <h4>Time remaining {time} seconds.</h4>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <p>Total Words: {wordCount}</p>
        </main>
    );
}

export default App;
