import { useState, useEffect, useRef } from 'react';

function useGameLogic(startingTime = 5, defaultTimeState = false) {
    const STARTING_TIME = startingTime;

    const [time, setTime] = useState(STARTING_TIME);
    const [userText, setUserText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [isRunning, setIsRunning] = useState(defaultTimeState);
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
        // Manually set to disabled, can't focus due
        // to asynchronicity otherwise.
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }

    function endGame() {
        setIsRunning(false);
        setWordCount(wordCounter(userText));
    }

    return [
        userText,
        handleChange,
        isRunning,
        textBoxRef,
        time,
        startGame,
        buttonText,
        wordCount
    ];
}

export default useGameLogic;
