import HighScorePanel from './HighScorePanel';
import '../../src/App.css';
import { useState } from 'react';

function Result({ countCorrectAnswers }) {
    const [highScore, setHighScore] = useState(0);

    if (countCorrectAnswers > highScore) {
        setHighScore(countCorrectAnswers);
    }

    return (
        <>
            <p>You got { countCorrectAnswers } correct!</p>
            <p>Thank you for playing!</p>
            <br /><br />
            <p>High score: { highScore }</p>
            <HighScorePanel />
        </>
    )
}

export default Result;