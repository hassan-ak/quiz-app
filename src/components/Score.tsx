// Imports
// React Imports
import React from 'react';
// Styles import
import '../App.css';

// Score Component Function
export const Score = () => {
    // const to show dummy score
    const score : number = 5;
    // Score component Return
    return (
        <div>
            <h2>Score: {score}</h2>
        </div>
    )
}