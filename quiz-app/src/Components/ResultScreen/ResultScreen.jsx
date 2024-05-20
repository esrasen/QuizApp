import React from 'react';
import './result-screen.css';

const ResultScreen = ({ score }) => {
    return (
        <div className="result-screen">
            <h1>Quiz Sonucu</h1>
            <p>Doğru Cevap: {score.correct}</p>
            <p>Yanlış Cevap: {score.incorrect}</p>
            <button className="restart" onClick={() => window.location.reload()}>Restart</button>
            <button className="exit" onClick={() => window.location.href = '/'}>Exit</button>
        </div>
    );
};

export default ResultScreen;
