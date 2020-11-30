// Imports
// React Imports
import React from 'react';
// Styles Imports
import { ButtonWrapper } from './QuestionCard.styles';
import '../App.css';

// Props type defination
type Props = {
    questionNum: number;
    totalQuestions: number;
    question: string;
    category : string;
    answers: string[];
    userAnswer: any;
    callback: any;
}

// Question Card Function
export const QuestionsCard: React.FC<Props> = ({    questionNum, 
                                                    totalQuestions,
                                                    question, 
                                                    category,
                                                    answers,  
                                                    userAnswer, 
                                                    callback,
                                                    
                                                }) =>{
    // Function return
    return (
        // Main div for Question Card
        <div className="cardContainer">
            {/* Display Current Question of total Questions */}
            <p>
                <strong>
                    Question: {questionNum} / {totalQuestions}
                </strong>
            </p>
            {/* Display Question Number */}
            <p className="question">{question}</p>
            <p className="category">{category}</p>
            {/* Div to map over answers and diaply them in the app */}
            <div>
                {answers.map((answer,i) => (
                    <div className="answers" key={i}>
                        <ButtonWrapper
                            correct = {userAnswer?.correctAnswer === answer}
                            userClicked = { userAnswer?.answer === answer }
                        >
                            <button value={answer} disabled={userAnswer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    </div>
                ))}
            </div>
        </div>
    )
}