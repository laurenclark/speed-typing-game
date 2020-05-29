import React, { useState, useEffect, useRef } from 'react';
import './styles/App.css';

function App() {
    const STARTING_TIME = 5;

    const [time, setTime] = useState(STARTING_TIME);
    const [userText, setUserText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const textBoxRef = useRef(null);

    const buttonText = isRunning ? 'Type!' : 'Start';

    useEffect(() => {
        if (isRunning && time > 0) {
            setTimeout(() => {
                setTime((time) => time - 1);
            }, 1000);
        } else if (time === 0) {
            endGame();
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

    function startGame() {
        setIsRunning(true);
        setTime(STARTING_TIME);
        setUserText('');
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }

    function endGame() {
        setIsRunning(false);
        setWordCount(wordCounter(userText));
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
                disabled={!isRunning}
                ref={textBoxRef}
            />
            <h4>Time remaining {time} seconds.</h4>
            <button onClick={startGame} disabled={isRunning}>
                {buttonText}
            </button>
            <p>Total Words: {wordCount}</p>
        </main>
    );
}

export default App;
