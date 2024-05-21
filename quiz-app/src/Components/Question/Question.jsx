import React, {useState, useEffect} from 'react';
import './question.css';
import pamuk from '../../assets/images/pamuk.jpg';
import tarkan from '../../assets/images/tarkan.jpg';
import cin from '../../assets/images/cin-seddi.jpg';
import fobi from '../../assets/images/fobi.jpg';
import balik from '../../assets/images/balik.jpg';
import bandira from '../../assets/images/bandira.jpg';
import billboard from '../../assets/images/billboard.jpg';
import mutluluk from '../../assets/images/mutluluk.jpg';
import parfum from '../../assets/images/parfum.jpg';
import trex from '../../assets/images/trex.jpg';

const images = {
    'pamuk.jpg': pamuk,
    'tarkan.jpg': tarkan,
    'cin-seddi.jpg': cin,
    'fobi.jpg': fobi,
    'balik.jpg': balik,
    'bandira.jpg': bandira,
    'billboard.jpg': billboard,
    'mutluluk.jpg': mutluluk,
    'parfum.jpg': parfum,
    'trex.jpg': trex
};
const Question = ({data, handleAnswer}) => {
    const [showAnswers, setShowAnswers] = useState(false);  // Cevapları gösterme durumu
    const [timer, setTimer] = useState(30);  // Sayaç
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Seçilen cevap

    useEffect(() => {       // Her yeni soru geldiğinde timer sıfırlanır ve cevaplar gösterilmez.
        setShowAnswers(false);
        setTimer(30);
        setSelectedAnswer(null);

        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => clearInterval(countdown);      // Component kaldırıldığında interval temizlenir.
    }, [data]);

    useEffect(() => {
        if (timer === 20) {     // 20. saniyede cevaplar gösterilir.
            setShowAnswers(true);
        }

        if (timer === 0) {
            handleAnswer(false); // Sayaç 0 olduğunda cevap verilmemiş kabul edilir.
        }
    }, [timer, handleAnswer]);

    const handleClick = (answer) => {
        setSelectedAnswer(answer); // Seçilen cevap kaydedilir.
        setTimeout(() => handleAnswer(answer === data.answer), 500); // Doğru veya yanlış olup olmadığı kontrol edilir ve 500ms sonra handleAnswer fonksiyonu çağrılır.
    };

    return (
        <div className="question">
            <h2>{data.question}</h2>
            <img
                src={images[data.media]}
                alt="Question img"
            />
            <div className="timer">Kalan süre: {timer}</div>
            {showAnswers ? (        // Eğer showAnswers true ise cevaplar gösterilir.
                <div className="options">
                    {data.options.map((option, index) => (
                        <button key={index} onClick={() => handleClick(option)}
                                className={selectedAnswer === option
                                    ? option === data.answer
                                        ? 'correct'
                                        : 'incorrect'
                                    : ''}
                        >

                            {option}
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Question;
