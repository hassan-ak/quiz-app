// Imports
// React Imports
import React from 'react';
// Components Imports
import { Header } from './components/Header';
import { StartQuiz } from './components/StartQuiz';
import { Loading } from './components/Loading';
import { Score } from './components/Score';
import { QuestionsCard } from './components/QuestionsCard';
import { Next } from './components/Next';
import { EndGame } from './components/EndGame';
// Styles Imports
import './App.css';

// App Function
function App() {
  return (
    <div className="container">
      <Header/>
      <StartQuiz/>
      <Loading/>
      <Score/>
      <QuestionsCard/>
      <Next/>
      <EndGame/>
    </div>
  );
}

export default App;
