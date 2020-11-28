// Imports
// React Imports
import React from 'react';
// Components Imports
import { Header } from './components/Header';
import { StartQuiz } from './components/StartQuiz';
// Styles Imports
import './App.css';

// App Function
function App() {
  return (
    <div className="container">
      <Header/>
      <StartQuiz/>
    </div>
  );
}

export default App;
