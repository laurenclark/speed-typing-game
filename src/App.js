import React from 'react';
import useGameLogic from './useGameLogic';
import './styles/App.css';

function App() {
    const [
        userText,
        handleChange,
        isRunning,
        textBoxRef,
        time,
        startGame,
        buttonText,
        wordCount
    ] = useGameLogic();

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
