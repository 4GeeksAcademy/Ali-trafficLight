import React, { useState } from 'react';

export const TrafficLight = () => {
    const [color, setColor] = useState('');


    return (
        <div className='all'>
            <div className="container">
                <div
                    className={`circle col-2 bg-success ${color === 'verde' ? 'glow-green' : ''}`}
                    onClick={() => setColor('verde')}
                >
                </div>
                <div
                    className={`circle col-2 bg-warning ${color === 'amarillo' ? 'glow-yellow' : ''}`}
                    onClick={() => setColor('amarillo')}
                >
                </div>
                <div
                    className={`circle col-2 bg-danger ${color === 'rojo' ? 'glow-red' : ''}`}
                    onClick={() => setColor('rojo')}
                >
                </div>
            </div>
            <div className='pillar'>
                <button className={`pressToCross col-2`}
                    onClick={() => setColor('rojo')}></button>
                <p className='text'>Press to Cross</p>
            </div>
        </div>
    );
};