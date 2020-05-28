import React, { useState } from 'react';
import './styles/App.css';

function App() {
    const [time, setTime] = useState(0);
    const [userText, setUserText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    function handleChange(e) {
        const { value } = e.target;
        setUserText(value);
    }

    function wordCounter(text) {
        const wordArray = text.trim().split(' ');
        return wordArray.filter((word) => word !== '').length;
    }

    function handleStart() {}

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
            <button onClick={() => console.log(wordCounter(userText))}>
                Start
            </button>
            <p>Total Words: {wordCount}</p>
        </main>
    );
}

export default App;
