import React from 'react';

const Card = ({ question }) => {
    if (!question) return <p>Loading...</p>;
    
    return (
        <div className='w-72 h-96 bg-white shadow-lg rounded p-4 pointer'>
            <div className='h-full flex items-center justify-center'>
                <p className='text-center'>{question}</p>
            </div>
        </div>
    );
}

export default Card;