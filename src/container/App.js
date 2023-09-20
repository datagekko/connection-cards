import React, { useState } from 'react';
import Card from '../components/Card';
import questions from './questions.js';
import './App.css';

function App() {
  const [shownIndices, setShownIndices] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(() => getRandomQuestion(shownIndices));

  function getRandomQuestion(currentShownIndices) {
    if (currentShownIndices.length === questions.length) {
      // If all questions have been shown, reset the shownIndices
      setShownIndices([]);
      currentShownIndices = [];
    }

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (currentShownIndices.includes(randomIndex)); // Ensure the question hasn't been shown yet

    setShownIndices(prevIndices => [...prevIndices, randomIndex]);
    return questions[randomIndex];
  }

  const handleCardClick = () => {
    setCurrentQuestion(getRandomQuestion(shownIndices));
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100 p-8'>
        <h1 className='text-3xl font-bold mb-4 text-center'>Connection Cards</h1>
        <p className='mb-6 text-xl text-center'>Play a game of genuine connection.</p>
        <div className='flex-grow flex items-center'>
          <div onClick={handleCardClick}>
            <Card question={currentQuestion} />
          </div>
        </div>
        <p className='mb-6 text-xl text-center'>Pull a card and ask your partner a question.</p>
    </div>
  );
}

export default App;