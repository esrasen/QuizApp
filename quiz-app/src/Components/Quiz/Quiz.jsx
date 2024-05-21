import React, { useState } from 'react';
import Question from '../Question/Question.jsx';
import './quiz.css';

const Quiz = ({ questions, finishQuiz }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);        // Şu anki soru indexi
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });       // Skor durumu

    const handleAnswer = (isCorrect) => {

        const updatedScore = {
            correct: score.correct + (isCorrect ? 1 : 0),
            incorrect: score.incorrect + (isCorrect ? 0 : 1),
        };
        setScore(updatedScore);

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);     // Sonraki soruya geçilir
        } else {
            finishQuiz(updatedScore);    // Sorular bittiğinde quiz sonlandırılır
        }
    };

    return (
        <div className="quiz">
            <Question
                key={currentQuestionIndex}
                data={questions[currentQuestionIndex]}
                handleAnswer={handleAnswer}
            />
            <div className="question-status">
                {currentQuestionIndex + 1} of {questions.length} Questions
            </div>
            <button className="exit" onClick={() => finishQuiz(score)}>Exit</button>
        </div>
    );
};

export default Quiz;
