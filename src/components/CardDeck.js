import React from 'react';
import Card from '../components/Card';
import BackCard from '../components/BackCard';

const CardDeck = ({ currentQuestion, lastQuestion }) => {
    return (

            <div className="flex space-x-4 p-4">
                {<BackCard />}
                {lastQuestion ? <Card question={lastQuestion} /> : <div className='w-72 h-96'></div>} {/* Conditionally render the last question*/}
            </div>
    );
}

export default CardDeck;
