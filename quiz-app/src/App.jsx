import { useState } from 'react'
import StartScreen from './Components/StartScreen/StartScreen'
import Quiz from './Components/Quiz/Quiz'
import ResultScreen from './Components/ResultScreen/ResultScreen'
import {questions} from './data/questions'
import './App.css'

function App() {
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });

    const startQuiz = () => {
        setStarted(true);
    };

    const finishQuiz = (score) => {
        setScore(score);
        setFinished(true);
    };
  return (
      <>
          <div className="App">
              {!started && !finished && <StartScreen startQuiz={startQuiz}/>}                    //Başlangıç ekranı
              {started && !finished && <Quiz questions={questions} finishQuiz={finishQuiz}/>}    //Quiz ekranı
              {finished && <ResultScreen score={score}/>}                                        //Sonuç ekranı
          </div>
      </>
  )
}

export default App
