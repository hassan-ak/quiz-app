// Imports
// React Imports
import React from 'react';
// Styles import
import '../App.css';

// Props type defination
type Props = {
    setScore: number;
}

// Score Component Function
export const Score: React.FC<Props> = ({setScore}) => {
    // Score component Return
    return (
        <div>
            <h2>Score: {setScore}</h2>
        </div>
    )
}