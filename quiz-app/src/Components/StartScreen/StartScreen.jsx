import React from 'react';
import './start-screen.css';

const StartScreen = ({ startQuiz }) => {
    return (
        <div className="start-screen">
            <h1>Teste Hoşgeldiniz</h1>
            <ul>
                <li>Test 10 sorudan oluşmaktadır ve her soru için 30 saniyeniz olacaktır.</li>
                <li>İlk 10 saniye boyunca cevap şıkları görünmeyecektir.</li>
                <li>Geçmiş sorulara dönme imkanı bulunmamaktadır.</li>
                <li>Test sonunda, doğru ve yanlış cevaplarınızın sayısını göreceksiniz.</li>
            </ul>
            <p className="start-screen-note">Başarılar dileriz !</p>
            <button id="start" onClick={startQuiz}>Başla</button>
        </div>
    );
};

export default StartScreen;
